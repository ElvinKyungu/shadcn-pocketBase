import { pb } from "@/pocketbase/pocket";
import { useUserStore } from "@/stores/store";
import { createUSer, creatUserWithGoogle, userLogin } from "@/types/user";
import router from '@/routes';

const userStore = useUserStore();

const signupUser = async (newUser: createUSer) => {
  newUser.passwordConfirm = newUser.password;
  try {
    const result = await pb.collection('users').create(newUser);
    console.log(result);
    userStore.setUserData({ userID: result.id, name: result.name, token: result.token });
    router.push('/user')
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
  } finally {
  }
};

const loginUserWithGoogle = async (newUser: creatUserWithGoogle) => {
  try {

    const result = await pb.collection('users').create(newUser);
    console.log(result);
    router.push('/user')
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
  } finally {
  }
};

const getUserDataWithGoogle = async () => {
  try{
    const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });
    if (authData && authData.meta) {
      console.log(authData.meta);
      userStore.setUserData({ userID: authData.meta.id, name: authData.meta.name, token: authData.meta.token });
      router.push('/user')
    }
  }catch(error){
    console.error('Erreur lors de la connexion', error);
  } finally {
  }
};

const loginUser = async(user: userLogin)=>{
  try{
    const userData = await pb.collection('users').authWithPassword(user.email, user.password);
    console.log(userData);
    userStore.setUserData({ userID: userData.record.id, name: userData.record.name, token: userData.token });
    router.push('/user')
  }catch(error){
    console.error('Erreur lors de la connexion', error);
  } finally {
  }
}

export {
  signupUser,
  loginUserWithGoogle,
  getUserDataWithGoogle,
  loginUser
};

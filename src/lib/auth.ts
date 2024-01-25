import { pb } from "@/pocketbase/pocket";
import { useUserStore } from "@/stores/store";
import { createUSer, creatUserWithGoogle } from "@/types/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter()

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

    //const result = await pb.collection('users').create(newUser);
    //console.log(result);
    //userStore.setUserData({ userID: result.id, name: result.name, token: result.token });
    //router.push('/user')
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
  } finally {
  }
};

const getUserDataWithGoogle = async () => {
  try{
    const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });
    console.log(authData.meta);
    if (authData && authData.meta) {
      const passwordForGoogleUser = '';
      await signupUser({
        username: authData.meta.username,
        name: authData.meta.name,
        email: authData.meta.email,
        password: passwordForGoogleUser,
        passwordConfirm: passwordForGoogleUser,
        avatar: authData.meta.avatar
      });
    }
  }catch(error){
    console.error('Erreur lors de la connexion', error);
  } finally {
  }
};

export {
  signupUser,
  loginUserWithGoogle,
  getUserDataWithGoogle
};

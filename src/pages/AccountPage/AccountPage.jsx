// will hold two separate pages, one for sign in (if user is not signed in) and
// one for their account details (and link to CS Financial link)
import useLoggedInUser from "@stores/useLoggedInUser.js";
import Login from "@features/Login/Login";

export default function AccountPage() {
  const userStore = useLoggedInUser();
  console.log(userStore.user);

  return (
    <main>
      {userStore.user === null ? (
        <Login userStore={userStore} />
      ) : (
        <div>
          <p>Logged in</p>
          <button type="button" onClick={() => userStore.setUser(null)}>
            Log out
          </button>
        </div>
      )}
    </main>
  );
}

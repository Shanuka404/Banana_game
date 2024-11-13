import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";


// import Loader from "../../components/Loader";
// import useGlobalContext from "../../context/GlobalProvider";

const GameLayout = () => {
  // const { loading, isLogged } = useGlobalContext();

  // if (!loading && isLogged) {
  //   router.push("/home");  // Use router.push() to redirect
  // }
  return (
    <>
    
      <Stack>
        <Stack.Screen name="leader-board" options= {{headerShown: false,}}/>
        <Stack.Screen name="practice-mode" options={{headerShown: false,}}/>
        <Stack.Screen name="tournament" options={{headerShown: false,}}/>
      </Stack>

      {/* <Loader isLoading={loading} /> */}
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default GameLayout;

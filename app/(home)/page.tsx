import HomeComponent from "./HomeComponent";
import mainMenu from "@/stack/mainMenu";

export default function Home() {

  return (
    <div className="max-w-[600px] w-full py-6">
      <div className="flex justify-center flex-col items-center p-6 border border-[#444] rounded-2xl gap-6" >
        {
          mainMenu.map((item, index) => <HomeComponent key={index} item={item} />)
        }
      </div >
    </div>
  );
}
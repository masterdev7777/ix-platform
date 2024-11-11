import Link from "next/link"

const HomeComponent = ({ item }: any) => {
  const stringLink = item.split(' ');
  stringLink.splice(0, 1);
  const link = '/' + stringLink.join('-').toLowerCase();

  return (
    <Link href={link} className="flex w-full h-40 p-6 text-lg transition-colors duration-300 ease-in-out border-2 border-borderColor rounded-2xl font-pavelt text-fontHover bg-bgColor hover:bg-bgHover">
      {item}
    </Link>
  )
}

export default HomeComponent
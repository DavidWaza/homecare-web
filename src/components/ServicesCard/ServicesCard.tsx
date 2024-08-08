export default function ServicesCard(props: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full  xl:max-w-[25rem] lg:max-w-[25rem] md:max-w-[20rem] sm:max-w-[30rem] max-w-[18rem] h-full max-h-[50vh] bg-gray-200 lg:p-8 md:p-8 mx-4 xl:mb-20 lg: md:mb-5 mt-20">
      <h1 className="text-3xl font-semibold mb-4">{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default function ServicesCard(props: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full  xl:max-w-[25rem] lg:max-w-[25rem] md:max-w-[20rem] h-full max-h-[50vh] bg-gray-200 p-8 mx-6 mb-20 mt-20">
      <h1 className="text-3xl font-semibold mb-4">{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

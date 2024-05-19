export default function Page() {
  const AnimalCoverUrl =
    'https://tse4.mm.bing.net/th?id=OIP.eEVDp2Q9GipKs0JMf6y4SwHaFj&pid=Api';
  return (
    <main>
      <a
        href="#"
        className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
      >
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={AnimalCoverUrl}
          alt=""
        ></img>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Animals
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Animals are cute
          </p>
        </div>
      </a>
    </main>
  );
}

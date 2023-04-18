import Anchor from "./Anchor";
export default function Layout({ navData, children }) {
  console.log({ navData });
  return (
    <>
      <nav>
        {navData.map((dog) => (
          <Anchor href={`/dogs/${dog.slug}`}>{dog.title}</Anchor>
        ))}
      </nav>
      {children}
      <footer>&copy; footer</footer>
    </>
  );
}

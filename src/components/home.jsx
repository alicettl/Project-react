import PageHeader from "./common/pageHeader";

const Home = () => {
  return (
    <PageHeader
      title={
        <>
          {" "}
          Bcard <i className="bi bi-card-heading"></i>
        </>
      }
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores fuga culpa repellendus! Ipsum reiciendis sed ducimus blanditiis expedita labore doloribus consectetur adipisci error aliquam aliquid dolores, sit asperiores voluptatibus dolor?"
    />
  );
};

export default Home;

import { useEffect, useState } from "react";
import api from "../../Api/Api";
import { filteredCategory } from "../../utils";
import Button from "../Button";
import Category from "../Category";
import Layout from "../Layout";
import Modal from "../Modal";
import { ICategory, initialState } from "../../utils";

const Ballot = () => {
  // useState - ballotData to store data
  const [ballotData, setBallotData] = useState<{ [key: string]: any }>({});
  const [bestDirector, setBestDirector] = useState<ICategory>(initialState);
  const [bestActor, setBestActor] = useState<ICategory>(initialState);
  const [bestActress, setBestActress] = useState<ICategory>(initialState);
  const [openModal, setOpenModal] = useState(false);

  const fetchBallotCategories = async () => {
    const res = await api.getBallotData();
    setBallotData(res);
  };

  const handleSubmit = () => {
    setOpenModal(!openModal);
  };

  const handleBestDirector = (value: ICategory) => {
    setBestDirector(value);
  }

  const handleBestActor = (value: ICategory) => {
    setBestActor(value);
  }

  const handleBestActress = (value: ICategory) => {
    setBestActress(value)
  }
  // UseEffect to fetch ballot data
  useEffect(() => {
    fetchBallotCategories();
  }, [])

  return (
    <Layout>
      <div className='ballot'>
        <Category
          title="Best Director"
          items={filteredCategory(ballotData.items, 'best-director')}
          handleCategorySelection={handleBestDirector}
          selected={bestDirector}
        />
        <Category
          title="Best Actor"
          items={filteredCategory(ballotData.items, 'best-actor')}
          selected={bestActor}
          handleCategorySelection={handleBestActor}
        />
        <Category
          title="Best Actress"
          items={filteredCategory(ballotData.items, 'best-actress')}
          selected={bestActress}
          handleCategorySelection={handleBestActress}
        />

        <Button title="SUBMIT VOTE" handleSubmit={handleSubmit} />

        {openModal &&
          <Modal
            closeModal={handleSubmit}
          >
            <h3>Results</h3>
            <p>Best Director:</p>  <span>{bestDirector.title}</span>
            <p>Best Actor:</p>  <span>{bestActor.title}</span>
            <p>Best Actress:</p>  <span>{bestActress.title}</span>
          </Modal>
        }


      </div>


    </Layout>

  )
}

export default Ballot;
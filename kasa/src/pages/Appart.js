
import Header from '../components/Header/Header';
import { useParams } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import "../style/Appart.css"
import datas from '../Data/Data';
import greyStar from "../images/grey_star.png"
import redStar from "../images/red_star.png"
import Collapse from '../components/Collapse/Collapse';
import { useState, useEffect } from 'react';
import Slider from "../components/Carroussel/Carroussel";
import Error from '../pages/Error';


const Appart = () => {


	const [imageSlider, setImageSlider] = useState([]);

    const idAppart = useParams('id').id;
	const foundId = datas.find(data => data.id === idAppart)

	const dataCurrentAppart = datas.filter(data => data.id === idAppart);


	if (foundId) {

	 useEffect(() => {
	 	const dataCurrentAppart = datas.filter(data => data.id === idAppart);
	 	setImageSlider(dataCurrentAppart[0].pictures);
	 }, [idAppart]);

	 var name = dataCurrentAppart[0].host.name.split(' '); 
	 var rating = dataCurrentAppart[0].rating;
	 var description  = dataCurrentAppart[0].description;
	 var equipments = dataCurrentAppart[0].equipments;

}

	
    return (
		foundId ? 
        <div>
            <Header />

			<Slider imageSlider={imageSlider}/>

            <main className="appart">
				<div className="appart-content">
					<div className="appart-content-infos">
						<h1>{dataCurrentAppart[0].title}</h1>
						<p>{dataCurrentAppart[0].location}</p>
						<div className='buttonAppart'>
							{dataCurrentAppart[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="appart-content-host">
						<div className='hostInfos'>
							<div className='appart-content-host-name'>
								<p>{name[0]}</p>
								<p>{name[1]}</p>
							</div>
							<img className='imgHost' src={dataCurrentAppart[0].host.picture} alt="hote de l'appartement" />
						</div>
							
						<div className="appart-content-host-stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="appart-collapse">
					<div className="appart-collapse-item">
						<Collapse title={'Description'}  content={description} />	
					</div>
					<div className="appart-collapse-item">
						<Collapse title={'Équipements'}  content={equipments}/>
					</div>	
				</div>
			</main>

            <Footer />
        </div>
		:
		<Error />
    );
}


export default Appart;
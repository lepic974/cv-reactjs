import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className='homeContent'>
                <div className='content'>
                    <h1>Bienvenue sur le Home !!!</h1>
                    <h2>Développeur Web Mobile</h2>
                    <div className='pdf'>
                        <a href='./media/CV.pdf' target="_blank">Télécharger CV</a>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Home;
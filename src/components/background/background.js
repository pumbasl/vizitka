import video from '../../media/video/secondbackground.mp4';

export default function Background(){
    return(
        <>
            <video autoPlay muted loop id="background">
                <source src={video} type="video/mp4" />
            </video>
            <div className="blur"></div>
        </>
        
    );
}
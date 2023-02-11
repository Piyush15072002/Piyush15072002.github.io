import './index.scss'

let images = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'];
let randomImage = images[Math.floor(Math.random() * images.length)];



const Logo = () => {
    return (
        <div className="logo-container">
            <img className="myLogo" src={require(`../../../assets/images/${randomImage}.gif`)} alt="GIF" />
        </div>
    )
}


export default Logo
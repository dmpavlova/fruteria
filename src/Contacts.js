import image from './/pic/111.png';
function Contacts(){
    return <div className='prom-container'>
        <h2>Как нас найти:</h2>
        <img src={image} alt="карта" width='600px' height='400px'/>
        <p>Наш адрес: ст.м.Пионерская, Коломяжский пр-кт 15к.2, вход через ТЦ Купеческий двор</p>
        <p>Тел. 8-901-203-23-45</p>
    </div>
}
export default Contacts;
import './App.css';
import Card from './components/Card';
import Image from './components/Image';

const test = [
  {
    id: '1',
    title: 'Card title №1',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    link: {
      address: '#',
      name: 'Go somewhere',
    }
  },
  {
    id: '2',
    title: 'Card title №2',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    link: {
      address: '#',
      name: 'Go somewhere',
    },
    image: {
      link: 'https://i.7fon.org/320/u275124.jpg',
      text: 'Some text',
    }
  }
];

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        {test.map((item) => {
            return <Card key={item.id} title={item.title} text={item.text} link={item.link}>
              {item?.image && <Image {...item.image} />}
            </Card>;
          })}
      </div>
    </div>
  );
}

export default App;

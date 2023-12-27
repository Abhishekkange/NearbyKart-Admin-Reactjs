import bg from '../../../src/assets/Icons/image.jpeg'
import { Link } from 'react-router-dom';

function HomePage() {
    return (
      <div className="relative">
        <img
          style={{ width: '1500px', height: '100%', overflowY: 'hidden' }}
          src={bg}
          alt="i"
        />
        <Link to="/admin/bulkProduct">
          <button
            style={{
              marginTop: '100px',
              marginRight: '130px',
              width: '150px',
              height: '50px',
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-96 right-96"
          >
            Get Started
          </button>
        </Link>
      </div>
    );
  }

export default HomePage;
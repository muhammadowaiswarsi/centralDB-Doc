import React, { useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import c7text from '../../assets/img/c7-text.svg';
import '../Navbar/style.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate, useLocation } from 'react-router-dom';
import jsonData from '../../helper.js/appContent.json';
import { generateJsonForSearching } from '../../helper.js/getReadmeData';
import { useSelector } from 'react-redux';

const Navbar = ({ setIsShown, shown }) => {
  const location = useLocation();
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState();
  const state = useSelector((state) => state?.data);
  const [matchtext, setIsMatchText] = useState([]);
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const searchData = useMemo(
    () => ({
      ...jsonData,
      docs: generateJsonForSearching(state?.docs, '/docs'),
      status: generateJsonForSearching(state?.status, '/status'),
    }),
    [state?.docs],
  );

  const autoSearch = (searchText) => {
    if (searchText) {
      setIsMatchText(
        Object.values(searchData)
          .flatMap((item) => {
            const filterData = item.filter((item1) => {
              const filteredSearchData = Object.values(item1)[0];
              return filteredSearchData.toLowerCase().includes(searchText.toLowerCase());
            });
            return filterData?.length
              ? (setSearch(true),
                filterData.map((item) => ({
                  text: Object.values(item)[0],
                  path: Object.values(item)[1],
                })))
              : '';
          }, Infinity)
          .filter(Boolean),
      );
    } else {
      setSearch(false);
    }
    setValue(searchText);
  };

  const Submitt = (path) => {
    navigate(path);
    setSearch(false);
    setValue('');
  };

  return (
    <>
      <nav className='navDiv navbar navbar-light navbar-expand sticky-top py-3'>
        <div className='container'>
          {shown && (
            <span className='toggle'>
              <GiHamburgerMenu onClick={() => setIsShown(!shown)} />
            </span>
          )}
          <button
            className={`navbar-brand d-flex align-items-center btn`}
            onClick={() => handleNavigation('/')}
          >
            <span>
              <img className='img-fluid' src={c7text} width='170' loading='eager' alt='hello' />
            </span>
          </button>
          <div className='collapse navbar-collapse' id='navcol-2'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <button
                  className='button btn btn-success ms-md-2'
                  onClick={() => handleNavigation('/')}
                >
                  Dashboard
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className='navbar navbar-light navbar-expand py-3 whiteBackground'>
        <div className='container'>
          <div className='collapse navbar-collapse  secondNav' id='navcol-1'>
            <ul className='navbar-nav M-auto'>
              <li className='nav-item'>
                <a
                  className={`navLink nav-link`}
                  target='_blank'
                  href='https://github.com/centraldb'
                  rel='noreferrer'
                >
                  <i className='fab fa-github m-r-3'></i>
                  <span className='anchor'>Github</span>
                </a>
              </li>
              <li className='nav-item'>
                <button
                  className={`nav-link btn-hover ${
                    location?.pathname === '/status' ? 'actives' : ''
                  }`}
                  onClick={() => handleNavigation('/status')}
                >
                  Status
                </button>
              </li>
              <li className='nav-item'>
                <button
                  className={`nav-link btn-hover ${location?.pathname === '#' ? 'actives' : ''}`}
                  onClick={() => handleNavigation('#')}
                >
                  Node
                </button>
              </li>
              <li className='nav-item'>
                <button
                  className={`nav-link btn-hover ${
                    location?.pathname === '/docs' ? 'actives' : ''
                  }`}
                  onClick={() => handleNavigation('/docs')}
                >
                  Docs
                </button>
              </li>
            </ul>
            <div class='form-group searchbar'>
              <input
                value={value}
                type='text'
                class='form-control'
                placeholder='Search'
                id='input-datalist'
                onChange={(e) => autoSearch(e.target.value.trimStart())}
              />
              {search && (
                <datalist id='list-timezone'>
                  {matchtext?.length ? (
                    matchtext.map(({ text, path }, id) => {
                      return (
                        <option style={{ padding: '5px' }} key={id} onClick={() => Submitt(path)}>
                          ...
                          {text.slice(
                            Math.max(text.toLowerCase().indexOf(value.toLowerCase()) - 13, 0),
                            text.toLowerCase().indexOf(value.toLowerCase()) + 13,
                          )}
                          ...
                        </option>
                      );
                    })
                  ) : (
                    <option>No Data Found...</option>
                  )}
                </datalist>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

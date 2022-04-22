import 'tw-elements';

export const Tabs = ({ discription }) => {
  const itemStyle = `nav-link
  w-full
  block
  font-normal
  text-base 
  text-dark dark:text-white hover:text-black
  leading-tight
  px-6 py-3 
  focus:outline-none 
`;

  return (
    <>
      <ul
        className='nav nav-tabs flex w-full flex-row flex-wrap list-none border-b-2 border-gray-light pl-0 mb-4'
        id='tabs-tab3'
        role='tablist'
      >
        <li className='nav-item' role='presentation'>
          <a
            href='#tabs-home3'
            className={`${itemStyle} active`}
            id='tabs-home-tab3'
            data-bs-toggle='pill'
            data-bs-target='#tabs-home3'
            role='tab'
            aria-controls='tabs-home3'
            aria-selected='true'
          >
            Details
          </a>
        </li>
        <li className='nav-item' role='presentation'>
          <a
            href='#tabs-profile3'
            className={itemStyle}
            id='tabs-profile-tab3'
            data-bs-toggle='pill'
            data-bs-target='#tabs-profile3'
            role='tab'
            aria-controls='tabs-profile3'
            aria-selected='false'
          >
            Offers
          </a>
        </li>
        <li className='nav-item' role='presentation'>
          <a
            href='#tabs-messages3'
            className={itemStyle}
            id='tabs-messages-tab3'
            data-bs-toggle='pill'
            data-bs-target='#tabs-messages3'
            role='tab'
            aria-controls='tabs-messages3'
            aria-selected='false'
          >
            History
          </a>
        </li>
      </ul>
      <div className='tab-content  ' id='tabs-tabContent3'>
        <div
          className='tab-pane fade show active whitespace-pre-line '
          id='tabs-home3'
          role='tabpanel'
          aria-labelledby='tabs-home-tab3'
        >
          <p className='max-h-96 overflow-auto overscroll-auto '>
            {discription}
          </p>
        </div>
        <div
          className='tab-pane fade'
          id='tabs-profile3'
          role='tabpanel'
          aria-labelledby='tabs-profile-tab3'
        >
          <p className='max-h-96 overflow-auto overscroll-auto '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            recusandae molestiae totam beatae, eos nihil debitis delectus sit
            voluptas provident obcaecati quia labore deserunt exercitationem
            maxime dolor voluptatibus perspiciatis omnis, similique corrupti
            dicta? Tenetur nulla officiis quisquam, aspernatur, corrupti magni
            eligendi ut similique obcaecati asperiores nihil deleniti cumque
            totam nisi?
          </p>
        </div>
        <div
          className='tab-pane fade'
          id='tabs-messages3'
          role='tabpanel'
          aria-labelledby='tabs-profile-tab3'
        >
          <p className='max-h-96 overflow-auto overscroll-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            facilis placeat accusamus enim delectus repellendus assumenda
            quisquam sit modi earum!
          </p>
        </div>
      </div>
    </>
  );
};

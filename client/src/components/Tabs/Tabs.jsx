import 'tw-elements';

export const Tabs = () => {
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
      <div className='tab-content' id='tabs-tabContent3'>
        <div
          className='tab-pane fade show active'
          id='tabs-home3'
          role='tabpanel'
          aria-labelledby='tabs-home-tab3'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          eligendi provident harum velit explicabo nihil, corporis voluptates
          molestias sed! Voluptatum, labore. Minima quidem perspiciatis voluptas
          eius eaque similique! Totam porro eum sunt, nemo saepe soluta facere
          nulla sequi doloribus hic, quam labore numquam iste aspernatur! Cumque
          corrupti minima delectus totam! Consequatur aliquam dolorem
          repudiandae quas totam distinctio modi nam. Nemo eveniet eos autem,
          vero deleniti nulla accusamus expedita debitis, ratione porro minus!
          Ipsam fuga earum esse veritatis officiis blanditiis culpa molestiae
          ut, est dolore, voluptatem recusandae. Corrupti ullam mollitia neque
          laudantium vel possimus, tempora aliquam, id fugiat alias quos in
          voluptate modi velit sint dolore iusto excepturi. Ducimus iusto id
          facere repellat harum fugit magnam porro commodi dolores modi, ut
          perferendis, repudiandae debitis esse asperiores veritatis aspernatur
          ullam sunt tenetur! Laudantium commodi delectus sequi consectetur sed
          dolor ipsum, molestiae magnam consequatur repellendus eligendi beatae
          expedita quisquam, quasi eveniet, veritatis architecto?
        </div>
        <div
          className='tab-pane fade'
          id='tabs-profile3'
          role='tabpanel'
          aria-labelledby='tabs-profile-tab3'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          recusandae molestiae totam beatae, eos nihil debitis delectus sit
          voluptas provident obcaecati quia labore deserunt exercitationem
          maxime dolor voluptatibus perspiciatis omnis, similique corrupti
          dicta? Tenetur nulla officiis quisquam, aspernatur, corrupti magni
          eligendi ut similique obcaecati asperiores nihil deleniti cumque totam
          nisi?
        </div>
        <div
          className='tab-pane fade'
          id='tabs-messages3'
          role='tabpanel'
          aria-labelledby='tabs-profile-tab3'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facilis
          placeat accusamus enim delectus repellendus assumenda quisquam sit
          modi earum!
        </div>
      </div>
    </>
  );
};

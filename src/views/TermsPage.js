import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Button from '../components/atoms/Button';
import Heading from '../components/atoms/Heading';

import { buttonVariants, headingTypes } from '../helpers/atomsTypesAndVariants';
import { StyledParagraph } from './styles/StyledTermsPage';
import { StyledCommonPageWrapper } from './styles/StyledCommonElements';

const TermsPage = () => {
  const history = useHistory();

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const is400 = useMediaQuery({
    query: '(max-width: 400px)',
  });

  return (
    <StyledCommonPageWrapper>
      <Heading
        type={
          isTablet ? headingTypes.mobileTopHeading : headingTypes.topHeading
        }
        heading={'Terms and Conditions'}
        headingDescription=""
      />
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio
        eaque eum rerum cumque non. Magnam ut necessitatibus itaque doloremque,
        sint recusandae velit, modi excepturi repellat tenetur consectetur
        fugiat iure ipsa similique assumenda iusto ex neque, beatae natus ea
        aliquid ullam praesentium cumque? Repudiandae explicabo eum consequatur
        qui deleniti tempora porro magnam error? Explicabo quidem recusandae
        vitae at accusantium atque earum, veritatis voluptatum obcaecati fuga
        sunt natus et deserunt, doloremque temporibus sit aut nemo ut ipsum enim
        est quisquam, nam architecto. Saepe pariatur omnis fugit similique
        aliquid fugiat facilis neque commodi minus earum quibusdam amet dolor,
        laudantium, eligendi dicta tempore mollitia assumenda ut quam! Nobis
        quia minima doloribus maiores odio facilis totam iusto consequuntur
        perferendis quisquam esse deleniti, itaque vero, explicabo eaque beatae,
        distinctio hic? Quos vero neque, facilis totam optio voluptate dolore
        magnam asperiores minus, excepturi saepe porro dolorum repudiandae,
        doloribus impedit. Illo mollitia dolorem accusamus ipsum perspiciatis!
        Ex a suscipit rerum, tempore, omnis aspernatur, inventore animi quis
        magni pariatur provident quasi exercitationem maiores dignissimos quo.
        Vero nulla cumque debitis temporibus suscipit perspiciatis quaerat quasi
        velit quos, reprehenderit, officia dicta maiores hic architecto, placeat
        itaque! Unde at exercitationem voluptatem inventore fugit assumenda
        adipisci, odit molestiae illum eaque dolores numquam laborum provident
        nihil quaerat quisquam nemo quia accusantium nostrum praesentium?
        Consectetur totam ipsam velit natus nesciunt nemo fugit nihil architecto
        itaque aperiam facilis provident ad animi, sint laudantium quam
        quibusdam quasi harum sapiente debitis veniam! Quo vitae molestiae dolor
        nam. Eos ipsam accusantium nemo voluptates ipsum quaerat, harum labore
        at iusto, hic praesentium unde. Aperiam dolor dolores consectetur in
        atque nobis. Laudantium quae doloremque iusto rem sed ratione veritatis,
        esse quisquam labore minima maxime reprehenderit blanditiis corporis
        nesciunt? Qui est, sunt ipsam, corporis eveniet voluptas ullam eligendi
        similique omnis minima provident iure obcaecati dolore cumque saepe
        praesentium commodi tempore nobis.
      </StyledParagraph>
      <Button
        variant={
          is400 ? buttonVariants.mobileTermsPage : buttonVariants.noCapitalize
        }
        type="button"
        label="Go to the previous page"
        clicked={history.goBack}
      />
    </StyledCommonPageWrapper>
  );
};

export default TermsPage;

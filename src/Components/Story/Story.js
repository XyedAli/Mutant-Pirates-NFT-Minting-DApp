/** @format */

import React from "react";
import Wrapper from "./Story.styled";

function Story() {
  return (
    <Wrapper id='story'>
      <div className='container'>
        <div className='roadmapTitle'>
          <h1>Story</h1>
        </div>
        <div className='row '>
          {/* sinlge item start here */}
          <div className='col-md-6 offsetMiddle'>
            <div className='singleItem'>
              <ul className='desc'>
                <p class="story">
                  THE WATERS OF THE SEA WAS RULED BY A SHIP OF PIRATES, LOOTING
                  ANYTHING SHINY, PRECIOUS OR LURING TO THEIR NEEDS. AS THEIR
                  GREED GREW, THEY AIMED AT GETTING SUPER POWERS FROM THE HOLY
                  ISLAND. AS THEY MADE THEIR QUEST TOWARDS THE HOLY ISLAND, THEY
                  HAD TO FACE STORM LIKE NEVER SEEN BEFORE, MAKING THEM SEA SICK
                  AND A FAMINE ROSE IN THE SHIP. ALL THE MEMBERS DEAD ON THE
                  SHIP. BUT THE DEVIL APPEARED AND ROSE THE PIRATE CREW BACK TO
                  A DIFFERENT LIFE AND THEIR SHIP STRONGER THAN EVER. THEY WERE
                  MUTATED AND MUCH MORE POWERFUL. THE DEVIL APPEARED AND TOOK AN
                  PROMISE FROM THE MUTANT PIRATES THAT THEY ARE HIS ARMY AND
                  HAVE TO TAKE OVER THE HOLY ISLAND. HENCE STARTING A WAR OF
                  GOOD VERSUS THE EVIL AND ALSO THE BIRTH OF MUTANT PIRATES.
                </p>
              </ul>
            </div>
          </div>
          {/* single item end ehre */}

          <div className='boxShadow'></div>
          <div className='boxShadow2'></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Story;

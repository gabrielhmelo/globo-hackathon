import React from "react";
import {withNavigation} from "react-navigation";
import { StatusBar, ScrollView, Animated, Button,TouchableOpacity,Text } from "react-native";
import Imagem from "../../../assets/avatar.png";
import Plim from "../../../assets/plim_plim.png";
import Friends from "../../../assets/friend.png";
import Gift from "../../../assets/gift.png";
import GloboPlay from "../../../assets/globo-play.png";
import Globo from "../../../assets/globo.com.png";
import GShow from "../../../assets/gshow.png";
import GE from "../../../assets/ge.png";
import G1 from "../../../assets/g1.png";
import oGlobo from "../../../assets/o-globo.png";
import Add from "../../../assets/plus.png";

import { 
  Img,
  Notification,
  ViewWrapper,
  ViewCard,
  PanalAdd,
  ButtonImg,
} from "../../Layout/Application/element";

function Sidernav({navigation}) {
  const navigate = (page) => navigation.navigate(page);
 
console.log(navigation);
  return (
    <ViewWrapper>
      <Notification>

        <ButtonImg onPress={() => navigate('Application')}>

            <Img source={Imagem} />

        </ButtonImg>

        <ButtonImg>  
            <Img source={Plim} />
        </ButtonImg>

        <ButtonImg onPress={() => navigate('Convite')}>
       
            <Img source={Friends}  />
          
        </ButtonImg>

        <ButtonImg onPress={() => navigate('Store')}>
         
            <Img source={Gift} />
         
        </ButtonImg>


      </Notification>

      <ScrollView scrollEventThrottle={16} vertical={true} showsVerticalScrollIndicator={false}>

        <ViewCard>

          <Img source={GloboPlay} />

        </ViewCard>

        <ViewCard>

          <Img source={Globo} />
        </ViewCard>

        <ViewCard>

          <Img source={GShow} />
        </ViewCard>

        <ViewCard>

          <Img source={G1} />

        </ViewCard>
        <ViewCard>

          <Img source={oGlobo} />
        </ViewCard>

        <ViewCard>

          <Img source={GE} />
        </ViewCard>

      </ScrollView>

      <PanalAdd>

        <ViewCard>

          <Img source={Add} />

        </ViewCard>

      </PanalAdd>

    </ViewWrapper>

  )
}
export default withNavigation(Sidernav);








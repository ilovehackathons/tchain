import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Linking from "expo-linking";

import { Colors } from "style";

import styles from "./SocialMedia.styles";

const socialMedia = [
  {
    iconName: "github",
    url: "https://github.com/ilovehackathons",
  },
  {
    iconName: "mastodon",
    url: "https://mastodon.social/@ilovehackathons",
  },
  {
    iconName: "medium-m",
    url: "https://medium.com/@ilovehackathons",
  },
];

const SocialMedia: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.box}>
      {socialMedia.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => Linking.openURL(item.url)}>
          <FontAwesome5 name={item.iconName} size={32} color={Colors.grey70} />
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default SocialMedia;

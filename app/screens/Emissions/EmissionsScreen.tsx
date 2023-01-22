/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { SectionList, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { filter } from "ramda";

import { EmissionListItem, EmissionListItemProps } from "components";
import { navigate } from "navigation";

import { SectionHeader } from "./components";
import styles from "./EmissionsScreen.styles";

interface Props {
  emissions?: any;
  recurringEmissions?: any;
}

const EmissionsScreen: React.FC<Props> = ({ emissions = [], recurringEmissions }) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);
  const sections = filter((item) => !!item, [recurringEmissions, ...emissions]);

  const renderListFooter = () => <View style={styles.separator} />;
  const renderSectionHeader = (date, title) => <SectionHeader title={title} date={date} />;

  const [ethPrice, setEthPrice] = useState("0");
  const [btcPrice, setBtcPrice] = useState("0");
  const [solPrice, setSolPrice] = useState("0");
  const [dotPrice, setDotPrice] = useState("0");
  const [etcPrice, setEtcPrice] = useState("0");
  const [bnbPrice, setBnbPrice] = useState("0");
  const [galPrice, setGalPrice] = useState("0");
  const [gmtPrice, setGmtPrice] = useState("0");

  useEffect(() => {
    async function fetchPrices() {
      setEthPrice(
        (+(await (await fetch("https://api.binance.com/api/v3/avgPrice?symbol=ETHBUSD")).json())
          .price).toFixed(2)
      );
      setBtcPrice(
        (+(await (await fetch("https://api.binance.com/api/v3/avgPrice?symbol=BTCBUSD")).json())
          .price).toFixed(2)
      );
      setSolPrice(
        (+(await (await fetch("https://api.binance.com/api/v3/avgPrice?symbol=SOLBUSD")).json())
          .price).toFixed(2)
      );
      setDotPrice(
        (+(await (await fetch("https://api.binance.com/api/v3/avgPrice?symbol=DOTBUSD")).json())
          .price).toFixed(2)
      );
      setEtcPrice(
        (+(await (await fetch("https://api.binance.com/api/v3/avgPrice?symbol=ETCBUSD")).json())
          .price).toFixed(2)
      );
      setBnbPrice(
        (+(await (await fetch("https://api.binance.com/api/v3/avgPrice?symbol=BNBBUSD")).json())
          .price).toFixed(2)
      );
      setGalPrice(
        (+(await (await fetch("https://api.binance.com/api/v3/avgPrice?symbol=GALBUSD")).json())
          .price).toFixed(2)
      );
      setGmtPrice(
        (+(await (await fetch("https://api.binance.com/api/v3/avgPrice?symbol=GMTBUSD")).json())
          .price).toFixed(2)
      );
    }
    fetchPrices();
  }, []);

  return (
    <>
      <SectionList<EmissionListItemProps>
        style={styles.container}
        sections={sections}
        stickySectionHeadersEnabled
        ListFooterComponent={renderListFooter}
        renderSectionHeader={({ section: { date, title } }) => renderSectionHeader(date, title)}
        keyExtractor={({ id }) => id}
        renderItem={({
          item: { id, isMitigated, name, title, co2value, iconName, emissionModelType, times },
        }) => (
          <EmissionListItem
            id={id}
            isMitigated={isMitigated}
            name={name}
            onPress={() => navigator.openEmissionItem({ id, isRecurringEmission: !!times })}
            title={title}
            co2value={co2value}
            iconName={iconName}
            emissionModelType={emissionModelType}
          />
        )}
      />

      <View style={[{ backgroundColor: "#e20074", padding: 5 }]}>
        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <Text style={{ flex: 1, color: "#fff", fontWeight: "bold", fontSize: 18 }}>Token</Text>
          <Text style={{ flex: 1, color: "#fff", fontWeight: "bold", fontSize: 18 }}>Symbol</Text>
          <Text style={{ flex: 1, color: "#fff", fontWeight: "bold", fontSize: 18 }}>Price</Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <Text style={{ flex: 1, color: "#fff" }}>Ethereum</Text>
          <Text style={{ flex: 1, color: "#fff" }}>ETH</Text>
          <Text style={{ flex: 1, color: "#fff" }}>{ethPrice} $</Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <Text style={{ flex: 1, color: "#fff" }}>Bitcoin</Text>
          <Text style={{ flex: 1, color: "#fff" }}>BTC</Text>
          <Text style={{ flex: 1, color: "#fff" }}>{btcPrice} $</Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <Text style={{ flex: 1, color: "#fff" }}>Solana</Text>
          <Text style={{ flex: 1, color: "#fff" }}>SOL</Text>
          <Text style={{ flex: 1, color: "#fff" }}>{solPrice} $</Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <Text style={{ flex: 1, color: "#fff" }}>Polkadot</Text>
          <Text style={{ flex: 1, color: "#fff" }}>DOT</Text>
          <Text style={{ flex: 1, color: "#fff" }}>{dotPrice} $</Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <Text style={{ flex: 1, color: "#fff" }}>Ethereum Classic</Text>
          <Text style={{ flex: 1, color: "#fff" }}>ETC</Text>
          <Text style={{ flex: 1, color: "#fff" }}>{etcPrice} $</Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <Text style={{ flex: 1, color: "#fff" }}>BNB</Text>
          <Text style={{ flex: 1, color: "#fff" }}>BNB</Text>
          <Text style={{ flex: 1, color: "#fff" }}>{bnbPrice} $</Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <Text style={{ flex: 1, color: "#fff" }}>Galxe</Text>
          <Text style={{ flex: 1, color: "#fff" }}>GAL</Text>
          <Text style={{ flex: 1, color: "#fff" }}>{galPrice} $</Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <Text style={{ flex: 1, color: "#fff" }}>Green Metaverse Token</Text>
          <Text style={{ flex: 1, color: "#fff" }}>GMT</Text>
          <Text style={{ flex: 1, color: "#fff" }}>{gmtPrice} $</Text>
        </View>
      </View>
    </>
  );
};

export default EmissionsScreen;

import React from "react";
import { ButtonGroup } from "react-native-elements";

export default class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
    const { navigate } = this.props.nav;
    if (selectedIndex == 0) {
      navigate("Pay");
    } else if (selectedIndex == 1) {
      navigate("CreateTutor");
    } else if (selectedIndex == 2) {
      navigate("ProfileStudent");
    }
  }

  render() {
    const buttons = ["Settings", "Earn", "Profile"];
    const { selectedIndex } = this.state;

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 30 }}
      />
    );
  }
}

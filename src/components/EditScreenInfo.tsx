import React from 'react';  // Importing React library.
import { StyleSheet } from 'react-native';  // Importing StyleSheet from 'react-native'.

import { ExternalLink } from './ExternalLink';  // Importing ExternalLink component from './ExternalLink'.
import { MonoText } from './StyledText';  // Importing MonoText component from './StyledText'.
import { Text, View } from './Themed';  // Importing Text and View components from './Themed'.

import Colors from '@/constants/Colors';  // Importing Colors module from '@/constants/Colors'.

export default function EditScreenInfo({ path }: { path: string }) {  // Defining a functional component EditScreenInfo that takes a 'path' prop.
  return (  // Returning JSX for the component.
    <View>  // Rendering a View component.
      <View style={styles.getStartedContainer}>  // Rendering a View component with custom styles.
        <Text
          style={styles.getStartedText}  // Applying custom styles to the Text component.
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}  // Applying custom styles to the View component.
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>  // Rendering the 'path' prop inside a MonoText component.
        </View>

        <Text
          style={styles.getStartedText}  // Applying custom styles to the Text component.
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>  // Rendering a View component with custom styles.
        <ExternalLink
          style={styles.helpLink}  // Applying custom styles to the ExternalLink component.
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({  // Defining styles using StyleSheet.create().
  getStartedContainer: {  // Style for the getStartedContainer View.
    alignItems: 'center',  // Center alignment for child elements.
    marginHorizontal: 50,  // Horizontal margin of 50 units.
  },
  homeScreenFilename: {  // Style for the homeScreenFilename View.
    marginVertical: 7,  // Vertical margin of 7 units.
  },
  codeHighlightContainer: {  // Style for the codeHighlightContainer View.
    borderRadius: 3,  // Border radius of 3 units.
    paddingHorizontal: 4,  // Horizontal padding of 4 units.
  },
  getStartedText: {  // Style for the getStartedText Text component.
    fontSize: 17,  // Font size of 17 units.
    lineHeight: 24,  // Line height of 24 units.
    textAlign: 'center',  // Center alignment.
  },
  helpContainer: {  // Style for the helpContainer View.
    marginTop: 15,  // Top margin of 15 units.
    marginHorizontal: 20,  // Horizontal margin of 20 units.
    alignItems: 'center',  // Center alignment for child elements.
  },
  helpLink: {  // Style for the helpLink ExternalLink component.
    paddingVertical: 15,  // Vertical padding of 15 units.
  },
  helpLinkText: {  // Style for the helpLinkText Text component.
    textAlign: 'center',  // Center alignment.
  },
});

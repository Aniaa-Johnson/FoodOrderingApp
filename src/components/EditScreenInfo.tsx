// Importing React library for JSX syntax
import React from 'react';
// Importing StyleSheet for styling
import { StyleSheet } from 'react-native';
// Importing ExternalLink component
import { ExternalLink } from './ExternalLink';
// Importing MonoText component
import { MonoText } from './StyledText';
// Importing Text and View components from Themed
import { Text, View } from './Themed';

// Importing Colors from constants
import Colors from '@/constants/Colors';

// Functional component definition with path prop
export default function EditScreenInfo({ path }: { path: string }) {
  // Return JSX for rendering
  return (
   // Top-level View component
    <View>
      //nested View with styles.getStartedContainer
      <View style={styles.getStartedContainer}>
        <Text
          // Styling for the Text component
          style={styles.getStartedText}
          // Light color for light theme
          lightColor="rgba(0,0,0,0.8)"
          //Dark color for dark theme
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

// StyleSheet for defining component styles
const styles = StyleSheet.create({
  // Style for the container View
  getStartedContainer: {
    // Center align items horizontally
    alignItems: 'center',
    // Apply horizontal margin
    marginHorizontal: 50,
  },
  // Style for filename View
  homeScreenFilename: {
    // Apply vertical margin
    marginVertical: 7,
  },
  // Style for code highlight container View
  codeHighlightContainer: {
    // Apply border radius
    borderRadius: 3,
    // Apply horizontal padding
    paddingHorizontal: 4,
  },
  // Style for get started text
  getStartedText: {
    // Set font size
    fontSize: 17,
    // Set line height
    lineHeight: 24,
    // Center align text
    textAlign: 'center',
  },
  // Style for help container View
  helpContainer: {
    // Apply top margin
    marginTop: 15,
    // Apply horizontal margin
    marginHorizontal: 20,
    // Center align items horizontally
    alignItems: 'center',
  },
  // Style for help link
  helpLink: {
    // Apply vertical padding
    paddingVertical: 15,
  },
  // Style for help link text
  helpLinkText: {
    // Center align text
    textAlign: 'center',
  },
});

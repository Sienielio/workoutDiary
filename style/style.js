import { StyleSheet } from "react-native";

const MyTheme = {
    roundness: 2,
    colors: {
        primary: "#b2dd7b", // Primary color
        onPrimary: "#fff", // Text color on primary background
        primaryContainer: "#b2dd7b", // Lighter shade of primary for containers
        onPrimaryContainer: "#586249", // Text color on primary container background
        secondary: "#586249", // Secondary color
        onSecondary: "#fff", // Text color on secondary background
        secondaryContainer: "#586249", // Secondary container color
        onSecondaryContainer: "#fff", // Text color on secondary container
        tertiary: "#386663", // Tertiary color
        onTertiary: "#fff", // Text color on tertiary background
        tertiaryContainer: "#386663", // Tertiary container color
        onTertiaryContainer: "#fff", // Text color on tertiary container
        error: "#ff6b6b", // Error color
        onError: "#fff", // Text color on error background
        errorContainer: "#f0932b", // Error container color
        onErrorContainer: "#fff", // Text color on error container
        background: "#f0f3f5", // Background color
        onBackground: "#212529", // Text color on background
        surface: "#f0f3f5", // Surface color
        onSurface: "#212529", // Text color on surface
        surfaceVariant: "#ced4da", // Variant of surface color
        onSurfaceVariant: "#212529", // Text color on variant of surface
        outline: "#495057", // Outline color
        outlineVariant: "#adb5bd", // Variant of outline color
        shadow: "#000", // Shadow color
        scrim: "#000", // Scrim color
        inverseSurface: "#212529", // Inverse surface color
        inverseOnSurface: "#fff", // Text color on inverse surface
        inversePrimary: "#6f42c1", // Inverse primary color
        elevation: {
            level0: "transparent",
            level1: "#f8f9fa",
            level2: "#e9ecef",
            level3: "#dee2e6",
            level4: "#ced4da",
            level5: "#adb5bd",
        },
        surfaceDisabled: "rgba(33, 37, 41, 0.12)", // Disabled surface color
        onSurfaceDisabled: "rgba(33, 37, 41, 0.38)", // Text color on disabled surface
        backdrop: "rgba(0, 0, 0, 0.4)", // Backdrop color
    },
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 16,
    },
    setting: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        alignItems: 'center',
    },
    card: {
        flex: 1,
    },
    cardView: {
        display: 'flex',
        alignItems: 'stretch',
        borderRadius: 10,
        margin: 5,
        padding: 5,
    },
    list: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#586249",
        margin: 10,
        backgroundColor: "#cef0a1",
    },
    theme: MyTheme
});

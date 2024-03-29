import { StyleSheet } from "react-native";

const MyTheme = {
    roundness: 2,
    colors: {
        primary: "#b2dd7b",
        onPrimary: "#fff",
        primaryContainer: "#b2dd7b",
        onPrimaryContainer: "#586249",
        secondary: "#586249",
        onSecondary: "#fff",
        secondaryContainer: "#586249",
        onSecondaryContainer: "#fff",
        tertiary: "#386663",
        onTertiary: "#fff",
        tertiaryContainer: "#386663",
        onTertiaryContainer: "#fff",
        error: "#ff6b6b",
        onError: "#fff",
        errorContainer: "#f0932b",
        onErrorContainer: "#fff",
        background: "#f0f3f5",
        onBackground: "#212529",
        surface: "#f0f3f5",
        onSurface: "#212529",
        surfaceVariant: "#ced4da",
        onSurfaceVariant: "#212529",
        outline: "#495057",
        outlineVariant: "#adb5bd",
        shadow: "#000",
        scrim: "#000",
        inverseSurface: "#212529",
        inverseOnSurface: "#fff",
        inversePrimary: "#6f42c1",
        elevation: {
            level0: "transparent",
            level1: "#f8f9fa",
            level2: "#e9ecef",
            level3: "#dee2e6",
            level4: "#ced4da",
            level5: "#adb5bd",
        },
        surfaceDisabled: "rgba(33, 37, 41, 0.12)",
        onSurfaceDisabled: "rgba(33, 37, 41, 0.38)",
        backdrop: "rgba(0, 0, 0, 0.4)",
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

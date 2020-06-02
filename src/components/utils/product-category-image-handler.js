import ElectricGuitarImage from "../../assets/electric_guitar.png"
import AcousticGuitarImage from "../../assets/acoustic_guitar.png"
import GrandPianoImage from "../../assets/grand_piano.png"
import KeyboardImage from "../../assets/keyboard.png"
import DrumsImage from "../../assets/drumset.png"
import TrumpetImage from "../../assets/trumpet.png"

export const getImageBasedOnCategory = (category) => {
    switch (category) {
        case "GuitarsElectric": return ElectricGuitarImage
        case "GuitarsAcoustic": return AcousticGuitarImage
        case "PianosKeyboards": return KeyboardImage
        case "PianosGrand pianos": return GrandPianoImage
        case "Drumsnull": return DrumsImage
        case "Othernull": return TrumpetImage
        default: return null
    }
}
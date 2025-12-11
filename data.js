// All 12 notes (Chromatic scale)
const ALL_NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
// Major scale pattern (in semitones) - W W H W W W H
const MAJOR_SCALE_STEPS = [0, 2, 4, 5, 7, 9, 11]; // Index of steps in ALL_NOTES

// Carnatic Raga Data (Example set)
const CARNATIC_RAGAS = {
    // 29th Melakarta
    "Dheerasankarabharanam": {
        arohanam: "S R₂ G₃ M₁ P D₂ N₃ Ṡ",
        avarohanam: "Ṡ N₃ D₂ P M₁ G₃ R₂ S",
        janyas: ["Aarabhi", "Begada", "Bilahari", "Kedaram", "Mohanam", "Sankarabharanam"]
    },
    // 15th Melakarta
    "Mayamalavagowla": {
        arohanam: "S R₁ G₃ M₁ P D₁ N₃ Ṡ",
        avarohanam: "Ṡ N₃ D₁ P M₁ G₃ R₁ S",
        janyas: ["Malahari", "Saveri", "Bowli", "Jaganmohini"]
    },
    // Add more ragas here
};

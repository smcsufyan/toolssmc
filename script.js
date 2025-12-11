document.addEventListener('DOMContentLoaded', () => {
    // --- Tool 1: Western Scale Finder Logic ---
    const baseKeySelect = document.getElementById('baseKey');
    const scaleNotesDisplay = document.getElementById('scaleNotes');
    const majorChordsDisplay = document.getElementById('majorChords');

    // Function to calculate the scale
    function calculateScale(baseNote) {
        const baseIndex = ALL_NOTES.indexOf(baseNote);
        let scale = [];
        let chordNames = [];

        // Find scale notes
        MAJOR_SCALE_STEPS.forEach(step => {
            const noteIndex = (baseIndex + step) % 12;
            scale.push(ALL_NOTES[noteIndex]);
        });
        
        // Find primary triads (I, IV, V) - Simplified logic
        const chordTypes = ["Major", "Minor", "Minor", "Major", "Major", "Minor", "Diminished"];
        
        scale.forEach((root, index) => {
            // Check for I, IV, V degree chords
            if (index === 0 || index === 3 || index === 4) {
                 // The third is 4 semitones (M3) or 3 semitones (m3) from the root
                 // The fifth is 7 semitones (P5) from the root
                 
                 // Simplified calculation for triads in the scale
                 const thirdIndex = (ALL_NOTES.indexOf(root) + (chordTypes[index] === "Major" ? 4 : 3)) % 12;
                 const fifthIndex = (ALL_NOTES.indexOf(root) + 7) % 12;
                 
                 const notes = `${ALL_NOTES[thirdIndex]} & ${ALL_NOTES[fifthIndex]}`;
                 chordNames.push(`${root} ${chordTypes[index]} ( ${notes} )`);
            }
        });
        
        scaleNotesDisplay.textContent = scale.join(', ');
        majorChordsDisplay.textContent = chordNames.join(' | ');
    }

    // Calculate C Major on initial load
    calculateScale(baseKeySelect.value);

    // Recalculate when selection changes
    baseKeySelect.addEventListener('change', (e) => {
        calculateScale(e.target.value);
    });


    // --- Tool 2: Carnatic Raga Information Logic ---
    const melaRagaSelect = document.getElementById('melaRaga');
    const ragaNotesDisplay = document.getElementById('ragaNotes');
    const janyaRagasDisplay = document.getElementById('janyaRagas');

    // Load Ragas into the select box
    Object.keys(CARNATIC_RAGAS).forEach(ragaName => {
        const option = document.createElement('option');
        option.value = ragaName;
        option.textContent = ragaName;
        melaRagaSelect.appendChild(option);
    });

    // Function to display Raga details
    function displayRagaInfo(ragaName) {
        const raga = CARNATIC_RAGAS[ragaName];
        if (raga) {
            ragaNotesDisplay.innerHTML = `**Arohanam:** ${raga.arohanam} <br> **Avarohanam:** ${raga.avarohanam}`;
            janyaRagasDisplay.textContent = raga.janyas.join(' | ');
        } else {
             ragaNotesDisplay.textContent = 'Information not available.';
             janyaRagasDisplay.textContent = '';
        }
    }

    // Display info for the first Raga on load
    displayRagaInfo(melaRagaSelect.value);

    // Update display when Raga selection changes
    melaRagaSelect.addEventListener('change', (e) => {
        displayRagaInfo(e.target.value);
    });
});

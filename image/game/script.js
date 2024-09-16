const tiles = document.querySelectorAll('.tile');
let selectedTile = null;
let matches = 0;

tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        // Ignore clicks on already matched tiles
        if (tile.classList.contains('matched')) {
            return;
        }

        // First click or color match check
        if (!selectedTile) {
            selectedTile = tile;
            tile.classList.add('selected');
        } else {
            const selectedColor = selectedTile.dataset.color;
            const currentColor = tile.dataset.color;

            if (selectedTile !== tile && selectedColor === currentColor) {
                // Match found
                tile.classList.add('matched');
                selectedTile.classList.add('matched');
                matches++;

                // Check if game is won
                if (matches === 6) {
                    alert('Congratulations! You have matched all colors.');
                    resetGame();
                }
            } else {
                // No match, reset selections after a short delay
                setTimeout(() => {
                    selectedTile.classList.remove('selected');
                    tile.classList.remove('selected');
                    selectedTile = null;
                }, 500); // Adjust delay as needed for better user experience
            }
        }
    });
});

function resetGame() {
    tiles.forEach(tile => {
        tile.classList.remove('selected', 'matched');
    });
    selectedTile = null;
    matches = 0;
}

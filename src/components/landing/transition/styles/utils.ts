export function assignTileColor(tiles: HTMLElement[], color: string): void {
  for (const tile of tiles) {
    tile.style.backgroundColor = color;
  }
}

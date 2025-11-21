const aside = document.getElementById( 'aside' ) as HTMLDivElement;
const xmark = document.getElementById( 'xmark' ) as HTMLImageElement;
const menu = document.getElementById( 'menu' ) as HTMLImageElement;

xmark.addEventListener( 'click', (): void => {
  aside.style.left = '-400px';
} );

menu.addEventListener( 'click', (): void => {
  aside.style.left = '0px';
} );

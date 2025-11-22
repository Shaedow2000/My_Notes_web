const aside = document.getElementById( 'aside' ) as HTMLDivElement;
const xmark = document.getElementById( 'xmark' ) as HTMLImageElement;
const menu = document.getElementById( 'menu' ) as HTMLImageElement;
const shadow_bg = document.getElementById( 'shadow-bg' ) as HTMLDivElement;

xmark.addEventListener( 'click', (): void => {
  aside.style.left = '-400px';
  shadow_bg.style.display = 'none';
} );

menu.addEventListener( 'click', (): void => {
  aside.style.left = '0px';
  shadow_bg.style.display = 'block';
} );

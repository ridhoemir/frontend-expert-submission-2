const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    // window.onscroll = () => {
    //   this._scrolledDrawer(drawer);
    // };
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    button.classList.toggle('toggle');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  // _scrolledDrawer(drawer) {
  //   if (
  //     (document.body.scrollTop > 80
  //     || document.documentElement.scrollTop > 80)
  //   ) {
  //     drawer.classList.add('scrolled');
  //   } else {
  //     drawer.classList.remove('scrolled');
  //   }
  // },
};

export default DrawerInitiator;

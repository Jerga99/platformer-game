
import BaseScene from './BaseScene';

class CreditsScene extends BaseScene {

  constructor(config) {
    super('CreditsScene', {...config, canGoBack: true});

    this.menu = [
      {scene: null, text: 'Thank you for playing'},
      {scene: null, text: 'Author: Filip'}
    ]
  }

  create() {
    super.create();
    this.createMenu(this.menu, () => {});
  }
}

export default CreditsScene;



// Create ScoreScene
// Display Best score, you can get from the local storage

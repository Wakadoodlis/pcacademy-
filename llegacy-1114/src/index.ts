import Options from "./options";

class Dialog {
  // containerId, removeDialogContainerOnClose, options

  container: JQuery<HTMLElement>;
  options: Options; /*options || {};*/
  removeDialogContainerOnClose: boolean;

  constructor(
    containerId: string,
    removeDialogContainerOnClose: boolean,
    options: Options = new Options()
  ) {
    this.container = $("#" + containerId);
    this.removeDialogContainerOnClose = removeDialogContainerOnClose;
  }

  closeDialog() {
    this.container.dialog("close");
    this.container.dialog("destroy");
    if (this.removeDialogContainerOnClose) {
      this.removeDialogContainer();
    }
  }

  removeDialogContainer() {
    this.container.remove();
  }

  buttons = [{ text: "Close", click: this.closeDialog }];

  openDialog() {
    let multiplier = this.options.sizeMultiplier || 0.5;
    this.container.dialog({
      autoOpen: false,
      resizable: false,
      height: window.innerHeight * multiplier,
      width: window.innerWidth * multiplier,
      modal: true,
      show: {
        effect: "fade",
        duration: 500
      },
      hide: {
        effect: "fade",
        duration: 500
      },
      buttons: this.buttons
    });

    this.container.dialog("open");
  }

  createDialogContainer = function(dialogAttributes) {
    if (!this.container[0]) {
      this.container = $("<div>").attr({
        id: this.container.attr("id")
      });

      this.container.attr(dialogAttributes);
      $("body").append(this.container);
    }
  };
}

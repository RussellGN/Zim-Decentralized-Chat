import { RootViewModel } from "../../domain/RootViewModel.js";
import { createNavigation, createRouter } from "../../domain/navigation/index";
import { FeatureSet } from "../../features";

export async function main(platform) {
   try {
      await platform.init();
      const features = await FeatureSet.load(platform.settingsStorage);
      const navigation = createNavigation();
      platform.setNavigation(navigation);
      const urlRouter = createRouter({ navigation, history: platform.history });
      urlRouter.attach();
      const vm = new RootViewModel({
         platform,
         urlRouter: urlRouter,
         navigation,
         features,
      });
      await vm.load();
      platform.createAndMountRootView(vm);
   } catch (err) {
      console.error(`${err.message}:\n${err.stack}`);
   }
}

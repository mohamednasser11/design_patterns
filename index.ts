//client side code

import { BrowseHistory } from "./iterator/browseHistory";

const history = new BrowseHistory();

history.push("https://new1.com");
history.push("https://new2.com");
history.push("https://new3.com");

const listITerator = history.createIterator();

while (listITerator.hasNext()) {
  const currentIteration = listITerator.current();
  console.log(`>>>>>>>>>> the position now is ==> ${currentIteration}`);
  listITerator.next();
}

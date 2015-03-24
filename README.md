# ionic-sticky-list-dividers
This is an approach to building sticky list headers using Ionic 

### Demo of functionality

http://codepen.io/chalettu/full/qEgXOJ/

### Getting Started


bower install https://github.com/chalettu/ionic-sticky-list-dividers.git --save

Download the package, and include the src/sticky.js file in your page.

include the module
```html
var app = angular.module('app', ["angular.ionic-sticky-list-dividers"]);
```



### Example Usage

```html
 <ion-content delegate-handle="scrollHandle" on-scroll="checkPosition()" sticky watch-variable="transactions">
      <div class="list">
          <div class="transaction-list item-container"
               ng-repeat="group in transactions  | groupBy: 'Day' | toArray:true | orderBy:'$key' : true   "
               id="gr_k_{{group.$key}}" on-repeat-done="eventTransactionsRendered">
              <div class="item item-divider">{{::group.$key}}</div>
              <div class="item transaction-item" ng-repeat="transaction in ::group">
                  <a ng-click="open(transaction)" class="navigate-right">
                      {{::transaction.name}}
                  </a>
              </div>
          </div>
      </div>
  </ion-content>
```

### Description of attributes
| Attribute        | Description           | Required | Example  |
| :------------- |:-------------| :-----:| :-----|
| watch-variable | Model variable list you want to watch for changes | Yes | transactions |
| on-scroll | Callback function in directive that monitors scroll position(Do not change)| Yes | checkPosition()|
| delegate-handle | Handle for the scroll container | Yes | scrollHandle |

### Notes and warnings
If you noticed in the demo I posted I did :: one time binding on a few of the elements.  I highly recommend you do this because your performance will suffer and the logic behind this directive wont work as well

Another note:  I havent tested this thouroughly and am not sure what will happen if you try to include more than one list inside of a single controller.

I also wanted to give credit to the developers on this thread
http://forum.ionicframework.com/t/sticky-list-headers/689/38

for the majority of the code I used to put all this together
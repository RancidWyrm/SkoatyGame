//=============================================================================
// NotADev - Front View Enemy Animations
// NAD_FrontView_EnemyAnimations.js                                                             
//=============================================================================

/*:
*
* @author NotADev
* @plugindesc allows skills to have a different animation for enemies - v.1
*
*
* @help
* In the notetag section of the skill add <enemyAnimId:X> (including the <>)
* replace the X with the ID of the animation you want to show when an enemy uses that skill
* e.g. <enemyAnimId:5> in a DEFAULT project this would play the animation 'Hit Thunder'
*
* Terms Of Use: free to use/modify for commercial/non-commercial projects.
* Credit to NotADev is appreciated, reposting of this plugin is fine too!
*
* Works for the latest version of MV
*/

//------
// Imported and namespace
//------

var Imported = Imported || {};
Imported.NAD_FrontView_EnemyAnimations = true;

//-----------------------------------------------------------------------------
// Window_BattleLog
//-----------------------------------------------------------------------------

(function () {

Window_BattleLog.prototype.startAction = function (subject, action, targets) {
    var item = action.item();
    let animId;
    let animTargets;
    if (subject.enemyId && item.meta.enemyAnimId) {
        animId = item.meta.enemyAnimId;
        animTargets = [subject];
    } else {
        animId = item.animationId;
        animTargets = targets.clone();
    }
    this.push('performActionStart', subject, action);
    this.push('waitForMovement');
    this.push('performAction', subject, action);
    this.push('showAnimation', subject, animTargets, animId);
    this.displayAction(subject, item);
};

})();

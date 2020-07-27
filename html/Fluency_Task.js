/********************* 
 * Fluency_Task Test *
 *********************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Fluency_Task';  // from the Builder filename that created this script
let expInfo = {'MTURK_ID': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const consent_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(consent_loopLoopBegin, consent_loopLoopScheduler);
flowScheduler.add(consent_loopLoopScheduler);
flowScheduler.add(consent_loopLoopEnd);
flowScheduler.add(Consent_2RoutineBegin());
flowScheduler.add(Consent_2RoutineEachFrame());
flowScheduler.add(Consent_2RoutineEnd());
const instructions_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instructions_loopLoopBegin, instructions_loopLoopScheduler);
flowScheduler.add(instructions_loopLoopScheduler);
flowScheduler.add(instructions_loopLoopEnd);
flowScheduler.add(Instructions_2RoutineBegin());
flowScheduler.add(Instructions_2RoutineEachFrame());
flowScheduler.add(Instructions_2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://www.surveymonkey.com/r/KQBSTH2', '');

  return Scheduler.Event.NEXT;
}


var Consent_1Clock;
var consent_image_1;
var consent_resp_1;
var thisExp;
var win;
var event;
var shuffle;
var TrialClock;
var Consent_2Clock;
var consent_image_2;
var InstructionsClock;
var instructions_image_1;
var instructions_resp_1;
var Instructions_2Clock;
var instructions_image_2;
var key_resp_instructions_2;
var fixation;
var timer;
var instruct_text;
var letter_text;
var screen_text;
var list_text1;
var list_text2;
var list_text3;
var list_text4;
var list_text5;
var allLetters;
var DifficultyClock;
var fixation_1;
var difficulty_question;
var options;
var anchor_1;
var anchor_2;
var key_resp_diff;
var StrategyClock;
var text_other;
var text;
var CatchClock;
var text_2;
var text_3;
var text_4;
var key_resp;
var EndClock;
var thank_you;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Consent_1"
  Consent_1Clock = new util.Clock();
  consent_image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_image_1', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1280, 720],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  consent_resp_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  Array.prototype.append = [].push;
  shuffle = util.shuffle;
  TrialClock = new util.Clock();
  
  // Initialize components for Routine "Consent_2"
  Consent_2Clock = new util.Clock();
  consent_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_image_2', units : 'pix', 
    image : 'Consent4.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1280, 720],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instructions_image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructions_image_1', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1280, 720],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  instructions_resp_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions_2"
  Instructions_2Clock = new util.Clock();
  instructions_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructions_image_2', units : 'pix', 
    image : 'Instructions6.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1280, 720],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_instructions_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  timer = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.7), 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  instruct_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct_text',
    text: 'Type as many items as possible that belong to the following category. Press "ENTER" after each item you type. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  letter_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.28], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  screen_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'screen_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  list_text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'list_text1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  list_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'list_text2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  list_text3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'list_text3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  list_text4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'list_text4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  list_text5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'list_text5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  
  allLetters = "abcdefghijklmnopqrstuvwxyz".split('');
  
  // Initialize components for Routine "Difficulty"
  DifficultyClock = new util.Clock();
  fixation_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_1',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  difficulty_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'difficulty_question',
    text: 'How difficult was it to think of items for this category? ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  options = new visual.TextStim({
    win: psychoJS.window,
    name: 'options',
    text: '1       2       3       4       5       6       7',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  anchor_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'anchor_1',
    text: 'Not difficult at all',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), (- 0.2)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  anchor_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'anchor_2',
    text: 'Very Difficult\n',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, (- 0.2)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  key_resp_diff = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Strategy"
  StrategyClock = new util.Clock();
  text_other = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_other',
    text: 'How did you go about thinking of items for this category? Type in one or two sentences and then press ENTER.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Catch"
  CatchClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'PRESS',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.27], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -1.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'to continue to the next trial.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  thank_you = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank_you',
    text: 'This is the end of the experiment.\nThank you for your time.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var consent_loop;
var currentLoop;
function consent_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  consent_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'consent.xlsx',
    seed: undefined, name: 'consent_loop'
  });
  psychoJS.experiment.addLoop(consent_loop); // add the loop to the experiment
  currentLoop = consent_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisConsent_loop of consent_loop) {
    const snapshot = consent_loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(Consent_1RoutineBegin(snapshot));
    thisScheduler.add(Consent_1RoutineEachFrame(snapshot));
    thisScheduler.add(Consent_1RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function consent_loopLoopEnd() {
  psychoJS.experiment.removeLoop(consent_loop);

  return Scheduler.Event.NEXT;
}


var instructions_loop;
function instructions_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  instructions_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'instructions.xlsx',
    seed: undefined, name: 'instructions_loop'
  });
  psychoJS.experiment.addLoop(instructions_loop); // add the loop to the experiment
  currentLoop = instructions_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisInstructions_loop of instructions_loop) {
    const snapshot = instructions_loop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(InstructionsRoutineBegin(snapshot));
    thisScheduler.add(InstructionsRoutineEachFrame(snapshot));
    thisScheduler.add(InstructionsRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function instructions_loopLoopEnd() {
  psychoJS.experiment.removeLoop(instructions_loop);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'condition.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TrialRoutineBegin(snapshot));
    thisScheduler.add(TrialRoutineEachFrame(snapshot));
    thisScheduler.add(TrialRoutineEnd(snapshot));
    thisScheduler.add(DifficultyRoutineBegin(snapshot));
    thisScheduler.add(DifficultyRoutineEachFrame(snapshot));
    thisScheduler.add(DifficultyRoutineEnd(snapshot));
    thisScheduler.add(StrategyRoutineBegin(snapshot));
    thisScheduler.add(StrategyRoutineEachFrame(snapshot));
    thisScheduler.add(StrategyRoutineEnd(snapshot));
    thisScheduler.add(CatchRoutineBegin(snapshot));
    thisScheduler.add(CatchRoutineEachFrame(snapshot));
    thisScheduler.add(CatchRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _consent_resp_1_allKeys;
var Consent_1Components;
function Consent_1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Consent_1'-------
    t = 0;
    Consent_1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    consent_image_1.setImage(CONS);
    consent_resp_1.keys = undefined;
    consent_resp_1.rt = undefined;
    _consent_resp_1_allKeys = [];
    // keep track of which components have finished
    Consent_1Components = [];
    Consent_1Components.push(consent_image_1);
    Consent_1Components.push(consent_resp_1);
    
    for (const thisComponent of Consent_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function Consent_1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Consent_1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Consent_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_image_1* updates
    if (t >= 0.0 && consent_image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_image_1.tStart = t;  // (not accounting for frame time here)
      consent_image_1.frameNStart = frameN;  // exact frame index
      
      consent_image_1.setAutoDraw(true);
    }

    
    // *consent_resp_1* updates
    if (t >= 0.0 && consent_resp_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_resp_1.tStart = t;  // (not accounting for frame time here)
      consent_resp_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent_resp_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent_resp_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent_resp_1.clearEvents(); });
    }

    if (consent_resp_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent_resp_1.getKeys({keyList: ['space'], waitRelease: false});
      _consent_resp_1_allKeys = _consent_resp_1_allKeys.concat(theseKeys);
      if (_consent_resp_1_allKeys.length > 0) {
        consent_resp_1.keys = _consent_resp_1_allKeys[_consent_resp_1_allKeys.length - 1].name;  // just the last key pressed
        consent_resp_1.rt = _consent_resp_1_allKeys[_consent_resp_1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Consent_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Consent_1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Consent_1'-------
    for (const thisComponent of Consent_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Consent_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Consent_2Components;
function Consent_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Consent_2'-------
    t = 0;
    Consent_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    Consent_2Components = [];
    Consent_2Components.push(consent_image_2);
    
    for (const thisComponent of Consent_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var keys;
function Consent_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Consent_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Consent_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_image_2* updates
    if (t >= 0.0 && consent_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_image_2.tStart = t;  // (not accounting for frame time here)
      consent_image_2.frameNStart = frameN;  // exact frame index
      
      consent_image_2.setAutoDraw(true);
    }

    keys = psychoJS.eventManager.getKeys();
    if (keys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    } else {
        if (keys) {
            if ((keys[0] === "return")) {
                continueRoutine = false;
            }
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Consent_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Consent_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Consent_2'-------
    for (const thisComponent of Consent_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Consent_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instructions_resp_1_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instructions_image_1.setImage(INS);
    instructions_resp_1.keys = undefined;
    instructions_resp_1.rt = undefined;
    _instructions_resp_1_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(instructions_image_1);
    InstructionsComponents.push(instructions_resp_1);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function InstructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_image_1* updates
    if (t >= 0.0 && instructions_image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_image_1.tStart = t;  // (not accounting for frame time here)
      instructions_image_1.frameNStart = frameN;  // exact frame index
      
      instructions_image_1.setAutoDraw(true);
    }

    
    // *instructions_resp_1* updates
    if (t >= 0.0 && instructions_resp_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_resp_1.tStart = t;  // (not accounting for frame time here)
      instructions_resp_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructions_resp_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructions_resp_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructions_resp_1.clearEvents(); });
    }

    if (instructions_resp_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_resp_1.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_resp_1_allKeys = _instructions_resp_1_allKeys.concat(theseKeys);
      if (_instructions_resp_1_allKeys.length > 0) {
        instructions_resp_1.keys = _instructions_resp_1_allKeys[_instructions_resp_1_allKeys.length - 1].name;  // just the last key pressed
        instructions_resp_1.rt = _instructions_resp_1_allKeys[_instructions_resp_1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions'-------
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_resp_1.keys', instructions_resp_1.keys);
    if (typeof instructions_resp_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instructions_resp_1.rt', instructions_resp_1.rt);
        routineTimer.reset();
        }
    
    instructions_resp_1.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_instructions_2_allKeys;
var Instructions_2Components;
function Instructions_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions_2'-------
    t = 0;
    Instructions_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_instructions_2.keys = undefined;
    key_resp_instructions_2.rt = undefined;
    _key_resp_instructions_2_allKeys = [];
    // keep track of which components have finished
    Instructions_2Components = [];
    Instructions_2Components.push(instructions_image_2);
    Instructions_2Components.push(key_resp_instructions_2);
    
    for (const thisComponent of Instructions_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Instructions_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_image_2* updates
    if (t >= 0.0 && instructions_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_image_2.tStart = t;  // (not accounting for frame time here)
      instructions_image_2.frameNStart = frameN;  // exact frame index
      
      instructions_image_2.setAutoDraw(true);
    }

    
    // *key_resp_instructions_2* updates
    if (t >= 0.0 && key_resp_instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instructions_2.tStart = t;  // (not accounting for frame time here)
      key_resp_instructions_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instructions_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instructions_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instructions_2.clearEvents(); });
    }

    if (key_resp_instructions_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instructions_2.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _key_resp_instructions_2_allKeys = _key_resp_instructions_2_allKeys.concat(theseKeys);
      if (_key_resp_instructions_2_allKeys.length > 0) {
        key_resp_instructions_2.keys = _key_resp_instructions_2_allKeys[_key_resp_instructions_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instructions_2.rt = _key_resp_instructions_2_allKeys[_key_resp_instructions_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions_2'-------
    for (const thisComponent of Instructions_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_instructions_2.keys', key_resp_instructions_2.keys);
    if (typeof key_resp_instructions_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_instructions_2.rt', key_resp_instructions_2.rt);
        routineTimer.reset();
        }
    
    key_resp_instructions_2.stop();
    // the Routine "Instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var textFill;
var textController;
var textIndex;
var entryCount;
var words_rt;
var TrialComponents;
function TrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Trial'-------
    t = 0;
    TrialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(91.000000);
    // update component parameters for each repeat
    letter_text.setText(Category);
    
    event.clearEvents();
    
    TrialClock.reset();
    
    textFill = "";
    list_text1.setText("");
    list_text1.pos = [(- 0.6), 0.15];
    
    list_text2.setText("");
    list_text2.pos = [(- 0.3), 0.15];
    
    list_text3.setText("");
    list_text3.pos = [0, 0.15];
    
    list_text4.setText("");
    list_text4.pos = [0.3, 0.15];
    
    list_text5.setText("");
    list_text5.pos = [0.6, 0.15];
    
    textController = [list_text1, list_text2, list_text3, list_text4, list_text5];
    textIndex = 0;
    entryCount = 0;
    
    words_rt = [];
    
    letter_text.bold = true;
    
    // keep track of which components have finished
    TrialComponents = [];
    TrialComponents.push(fixation);
    TrialComponents.push(timer);
    TrialComponents.push(instruct_text);
    TrialComponents.push(letter_text);
    TrialComponents.push(screen_text);
    TrialComponents.push(list_text1);
    TrialComponents.push(list_text2);
    TrialComponents.push(list_text3);
    TrialComponents.push(list_text4);
    TrialComponents.push(list_text5);
    
    for (const thisComponent of TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
var timerText;
function TrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *timer* updates
    if (t >= 1 && timer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timer.tStart = t;  // (not accounting for frame time here)
      timer.frameNStart = frameN;  // exact frame index
      
      timer.setAutoDraw(true);
    }

    frameRemains = 1 + 90 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (timer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      timer.setAutoDraw(false);
    }
    
    if (timer.status === PsychoJS.Status.STARTED){ // only update if being drawn
      timer.setText(timerText);
    }
    
    // *instruct_text* updates
    if (t >= 1 && instruct_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_text.tStart = t;  // (not accounting for frame time here)
      instruct_text.frameNStart = frameN;  // exact frame index
      
      instruct_text.setAutoDraw(true);
    }

    frameRemains = 1 + 90 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instruct_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instruct_text.setAutoDraw(false);
    }
    
    // *letter_text* updates
    if (t >= 1 && letter_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_text.tStart = t;  // (not accounting for frame time here)
      letter_text.frameNStart = frameN;  // exact frame index
      
      letter_text.setAutoDraw(true);
    }

    frameRemains = 1 + 90 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (letter_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      letter_text.setAutoDraw(false);
    }
    
    // *screen_text* updates
    if (t >= 1 && screen_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      screen_text.tStart = t;  // (not accounting for frame time here)
      screen_text.frameNStart = frameN;  // exact frame index
      
      screen_text.setAutoDraw(true);
    }

    frameRemains = 1 + 90 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (screen_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      screen_text.setAutoDraw(false);
    }
    
    // *list_text1* updates
    if (t >= 1 && list_text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      list_text1.tStart = t;  // (not accounting for frame time here)
      list_text1.frameNStart = frameN;  // exact frame index
      
      list_text1.setAutoDraw(true);
    }

    frameRemains = 1 + 90 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (list_text1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      list_text1.setAutoDraw(false);
    }
    
    // *list_text2* updates
    if (t >= 1 && list_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      list_text2.tStart = t;  // (not accounting for frame time here)
      list_text2.frameNStart = frameN;  // exact frame index
      
      list_text2.setAutoDraw(true);
    }

    frameRemains = 1 + 90 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (list_text2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      list_text2.setAutoDraw(false);
    }
    
    // *list_text3* updates
    if (t >= 1 && list_text3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      list_text3.tStart = t;  // (not accounting for frame time here)
      list_text3.frameNStart = frameN;  // exact frame index
      
      list_text3.setAutoDraw(true);
    }

    frameRemains = 1 + 90 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (list_text3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      list_text3.setAutoDraw(false);
    }
    
    // *list_text4* updates
    if (t >= 1 && list_text4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      list_text4.tStart = t;  // (not accounting for frame time here)
      list_text4.frameNStart = frameN;  // exact frame index
      
      list_text4.setAutoDraw(true);
    }

    frameRemains = 1 + 90 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (list_text4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      list_text4.setAutoDraw(false);
    }
    
    // *list_text5* updates
    if (t >= 1 && list_text5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      list_text5.tStart = t;  // (not accounting for frame time here)
      list_text5.frameNStart = frameN;  // exact frame index
      
      list_text5.setAutoDraw(true);
    }

    frameRemains = 1 + 90 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (list_text5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      list_text5.setAutoDraw(false);
    }
    timerText= Math.round(routineTimer.getTime()).toString() 
    keys = psychoJS.eventManager.getKeys();
    if (keys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    } else {
        if (keys) {
            if ((keys[0] === "space")) {
                textFill += " ";
            } else {
                if ((keys[0] === "right")) {
                    continueRoutine = false;
                } else {
                    if ((keys[0] === "backspace")) {
                        textFill = textFill.slice(0, (- 1));
                    } else {
                        if (allLetters.indexOf(keys[0]) > -1) {
                            textFill += keys[0];
                        }
                    }
                }
            }
            screen_text.setText(textFill);
            
            if ((keys[0] === "return")) {
                words_rt.append(timerText);
                let column = textController[textIndex];
                let column_text = ((column.text + "\n") + screen_text.text);
                textFill = "";
                screen_text.setText(textFill);
                column.setPos([column.pos[0], (column.pos[1] - 0.0284)]);
                entryCount += 1;
                if ((entryCount >= 10)) {
                    entryCount = 0;
                    textIndex += 1;
                    if ((textIndex >= textController.length)) {
                        routineTimer.reset();
                        continueRoutine = false;
                    }
                }
                column.setText(column_text);
            }
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var word_strings;
var all_words;
function TrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Trial'-------
    for (const thisComponent of TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    word_strings = [list_text1, list_text2, list_text3, list_text4, list_text5];
    all_words = [];
    
    for (var this_word_string of word_strings)
       all_words= all_words.concat(this_word_string.text.trim().split('\n'))
    
    let num= 1
    for (var ws of all_words)
    {
        if (ws.length > 0)
        {
           psychoJS.experiment.addData("word" + num.toString(), ws)
           num= num + 1
        }
    }
    
    let i= 1
    for (var timerText of words_rt)
        {
           psychoJS.experiment.addData("rt_" + i.toString(), timerText)
           i= i + 1
        }
    
    routineTimer.reset();
    
    
    
    
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_diff_allKeys;
var DifficultyComponents;
function DifficultyRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Difficulty'-------
    t = 0;
    DifficultyClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_diff.keys = undefined;
    key_resp_diff.rt = undefined;
    _key_resp_diff_allKeys = [];
    // keep track of which components have finished
    DifficultyComponents = [];
    DifficultyComponents.push(fixation_1);
    DifficultyComponents.push(difficulty_question);
    DifficultyComponents.push(options);
    DifficultyComponents.push(anchor_1);
    DifficultyComponents.push(anchor_2);
    DifficultyComponents.push(key_resp_diff);
    
    for (const thisComponent of DifficultyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function DifficultyRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Difficulty'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = DifficultyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_1* updates
    if (t >= 0.0 && fixation_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_1.tStart = t;  // (not accounting for frame time here)
      fixation_1.frameNStart = frameN;  // exact frame index
      
      fixation_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_1.setAutoDraw(false);
    }
    
    // *difficulty_question* updates
    if (t >= 1 && difficulty_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      difficulty_question.tStart = t;  // (not accounting for frame time here)
      difficulty_question.frameNStart = frameN;  // exact frame index
      
      difficulty_question.setAutoDraw(true);
    }

    
    // *options* updates
    if (t >= 1 && options.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      options.tStart = t;  // (not accounting for frame time here)
      options.frameNStart = frameN;  // exact frame index
      
      options.setAutoDraw(true);
    }

    
    // *anchor_1* updates
    if (t >= 1 && anchor_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      anchor_1.tStart = t;  // (not accounting for frame time here)
      anchor_1.frameNStart = frameN;  // exact frame index
      
      anchor_1.setAutoDraw(true);
    }

    
    // *anchor_2* updates
    if (t >= 1 && anchor_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      anchor_2.tStart = t;  // (not accounting for frame time here)
      anchor_2.frameNStart = frameN;  // exact frame index
      
      anchor_2.setAutoDraw(true);
    }

    
    // *key_resp_diff* updates
    if (t >= 1 && key_resp_diff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_diff.tStart = t;  // (not accounting for frame time here)
      key_resp_diff.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_diff.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_diff.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_diff.clearEvents(); });
    }

    if (key_resp_diff.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_diff.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7'], waitRelease: false});
      _key_resp_diff_allKeys = _key_resp_diff_allKeys.concat(theseKeys);
      if (_key_resp_diff_allKeys.length > 0) {
        key_resp_diff.keys = _key_resp_diff_allKeys[_key_resp_diff_allKeys.length - 1].name;  // just the last key pressed
        key_resp_diff.rt = _key_resp_diff_allKeys[_key_resp_diff_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of DifficultyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DifficultyRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Difficulty'-------
    for (const thisComponent of DifficultyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_diff.keys', key_resp_diff.keys);
    if (typeof key_resp_diff.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_diff.rt', key_resp_diff.rt);
        routineTimer.reset();
        }
    
    key_resp_diff.stop();
    // the Routine "Difficulty" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var modify;
var StrategyComponents;
function StrategyRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Strategy'-------
    t = 0;
    StrategyClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    psychoJS.eventManager.clearEvents()
    allLetters = "abcdefghijklmnopqrstuvwxyz".split('');
    modify = false;
    text.text = "";
    
    // keep track of which components have finished
    StrategyComponents = [];
    StrategyComponents.push(text_other);
    StrategyComponents.push(text);
    
    for (const thisComponent of StrategyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var textAdd;
function StrategyRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Strategy'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = StrategyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_other* updates
    if (t >= 0 && text_other.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_other.tStart = t;  // (not accounting for frame time here)
      text_other.frameNStart = frameN;  // exact frame index
      
      text_other.setAutoDraw(true);
    }

    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    let theseKeys = psychoJS.eventManager.getKeys();
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    
    if (textAdd === 'return') {
        textAdd = '';  // Add nothing
        continueRoutine = false; // End routine
    } else if (textAdd === 'space') {
        textAdd = ' ';  // Add a space
    } else if (textAdd === 'apostrophe') {
        textAdd = "'"; // Add an apostophe
    } else if (textAdd === 'slash') {
        textAdd = "/"; // Add a slash
    } else if (textAdd === 'comma') {
        textAdd = ","; // Add a comma
    } else if (textAdd === 'period') {
        textAdd = "."; // Add a period
    } else if (textAdd === 'backspace') {
        text.text = text.text.slice(0, -1);
        textAdd = undefined;
    } else if (['lshift', 'rshift'].includes(textAdd)) {
        modify = true;
    } else if (textAdd !== undefined) {
        if (modify) {
            text.text = text.text + textAdd.toUpperCase();
            modify = false;
         } else {
            text.text = text.text + textAdd
         }
          textAdd = undefined;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of StrategyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StrategyRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Strategy'-------
    for (const thisComponent of StrategyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("Strategy_resp", text.text);
    
    // the Routine "Strategy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var CatchComponents;
function CatchRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Catch'-------
    t = 0;
    CatchClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    text_3.setText(LET);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    CatchComponents = [];
    CatchComponents.push(text_2);
    CatchComponents.push(text_3);
    CatchComponents.push(text_4);
    CatchComponents.push(key_resp);
    
    for (const thisComponent of CatchComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function CatchRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Catch'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = CatchClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: [], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CatchComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CatchRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Catch'-------
    for (const thisComponent of CatchComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Catch" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var EndComponents;
function EndRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'End'-------
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(thank_you);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function EndRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'End'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thank_you* updates
    if (t >= 0 && thank_you.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thank_you.tStart = t;  // (not accounting for frame time here)
      thank_you.frameNStart = frameN;  // exact frame index
      
      thank_you.setAutoDraw(true);
    }

    frameRemains = 0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thank_you.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thank_you.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'End'-------
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

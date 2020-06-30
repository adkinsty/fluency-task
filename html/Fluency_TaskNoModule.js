/********************* 
 * Fluency Task Test *
 *********************/

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height'
});

// store info about the experiment session:
let expName = 'Fluency Task';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

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
const instructions_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instructions_loopLoopBegin, instructions_loopLoopScheduler);
flowScheduler.add(instructions_loopLoopScheduler);
flowScheduler.add(instructions_loopLoopEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(EndRoutineBegin);
flowScheduler.add(EndRoutineEachFrame);
flowScheduler.add(EndRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({configURL: 'config.json', expInfo: expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.0.6';

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var InstructionsClock;
var instructions;
var thisExp;
var win;
var event;
var shuffle;
var TrialClock;
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
var DifficultyClock;
var fixation_1;
var difficulty_question;
var options;
var anchor_1;
var anchor_2;
var StrategyClock;
var text_other;
var text;
var EndClock;
var thank_you;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructions', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1280, 720],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  Array.prototype.append = [].push;
  Object.prototype.upper = "".toUpperCase;
  shuffle = util.shuffle;
  
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  timer = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer',
    text: 'default text',
    font: 'Arial',
    pos: [(- 0.7), 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  instruct_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct_text',
    text: 'Type as many items as possible that belong to the following category. Press "ENTER" after each item you type. ',
    font: 'Arial',
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  letter_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter_text',
    text: 'default text',
    font: 'Arial',
    pos: [0, 0.28], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  screen_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'screen_text',
    text: '',
    font: 'Arial',
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  list_text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'list_text1',
    text: '',
    font: 'Arial',
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  list_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'list_text2',
    text: '',
    font: 'Arial',
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  list_text3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'list_text3',
    text: '',
    font: 'Arial',
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  list_text4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'list_text4',
    text: '',
    font: 'Arial',
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  list_text5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'list_text5',
    text: '',
    font: 'Arial',
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  
  // Initialize components for Routine "Difficulty"
  DifficultyClock = new util.Clock();
  fixation_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_1',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  difficulty_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'difficulty_question',
    text: 'How difficult was it to think of items for this category? ',
    font: 'Arial',
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  options = new visual.TextStim({
    win: psychoJS.window,
    name: 'options',
    text: '1       2       3       4       5       6       7',
    font: 'Arial',
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  anchor_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'anchor_1',
    text: 'Not difficult at all',
    font: 'Arial',
    pos: [(- 0.4), (- 0.2)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  anchor_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'anchor_2',
    text: 'Very Difficult\n',
    font: 'Arial',
    pos: [0.4, (- 0.2)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Strategy"
  StrategyClock = new util.Clock();
  text_other = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_other',
    text: 'How did you go about thinking of items for this category? Type in one or two sentences and then press ENTER.',
    font: 'Arial',
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    pos: [0, 0], height: 0.05,  wrapWidth: 1, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  thank_you = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank_you',
    text: 'This is the end of the experiment.\nThank you for your time.',
    font: 'Arial',
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var instructions_loop;
function instructions_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  instructions_loop = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'instructions.xlsx',
    seed: undefined, name: 'instructions_loop'});
  psychoJS.experiment.addLoop(instructions_loop); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisInstructions_loop of instructions_loop) {
    thisScheduler.add(importConditions(instructions_loop));
    thisScheduler.add(InstructionsRoutineBegin);
    thisScheduler.add(InstructionsRoutineEachFrame);
    thisScheduler.add(InstructionsRoutineEnd);
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
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.xlsx',
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(TrialRoutineBegin);
    thisScheduler.add(TrialRoutineEachFrame);
    thisScheduler.add(TrialRoutineEnd);
    thisScheduler.add(DifficultyRoutineBegin);
    thisScheduler.add(DifficultyRoutineEachFrame);
    thisScheduler.add(DifficultyRoutineEnd);
    thisScheduler.add(StrategyRoutineBegin);
    thisScheduler.add(StrategyRoutineEachFrame);
    thisScheduler.add(StrategyRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var spacebar0;
var InstructionsComponents;
function InstructionsRoutineBegin() {
  //------Prepare to start Routine 'Instructions'-------
  t = 0;
  InstructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  instructions.setImage(INS);
  spacebar0 = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  InstructionsComponents = [];
  InstructionsComponents.push(instructions);
  InstructionsComponents.push(spacebar0);
  
  for (const thisComponent of InstructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function InstructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = InstructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instructions* updates
  if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instructions.tStart = t;  // (not accounting for frame time here)
    instructions.frameNStart = frameN;  // exact frame index
    instructions.setAutoDraw(true);
  }

  
  // *spacebar0* updates
  if (t >= 0.0 && spacebar0.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    spacebar0.tStart = t;  // (not accounting for frame time here)
    spacebar0.frameNStart = frameN;  // exact frame index
    spacebar0.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (spacebar0.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space', 'g']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of InstructionsComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEnd() {
  //------Ending Routine 'Instructions'-------
  for (const thisComponent of InstructionsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var TrialComponents;
function TrialRoutineBegin() {
  //------Prepare to start Routine 'Trial'-------
  t = 0;
  TrialClock.reset(); // clock
  frameN = -1;
  routineTimer.add(11.000000);
  // update component parameters for each repeat
  letter_text.setText(Category);
  
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
}

var frameRemains;
function TrialRoutineEachFrame() {
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

  frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (timer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    timer.setAutoDraw(false);
  }
  if (timer.status === PsychoJS.Status.STARTED){ // only update if being drawn
    timer.setText(str(round(routineTimer.getTime())));
  }
  
  // *instruct_text* updates
  if (t >= 1 && instruct_text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instruct_text.tStart = t;  // (not accounting for frame time here)
    instruct_text.frameNStart = frameN;  // exact frame index
    instruct_text.setAutoDraw(true);
  }

  frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

  frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

  frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

  frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

  frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

  frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

  frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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

  frameRemains = 1 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (list_text5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    list_text5.setAutoDraw(false);
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of TrialComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function TrialRoutineEnd() {
  //------Ending Routine 'Trial'-------
  for (const thisComponent of TrialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  return Scheduler.Event.NEXT;
}

var key_resp_diff;
var DifficultyComponents;
function DifficultyRoutineBegin() {
  //------Prepare to start Routine 'Difficulty'-------
  t = 0;
  DifficultyClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_diff = new core.BuilderKeyResponse(psychoJS);
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
}


function DifficultyRoutineEachFrame() {
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
    key_resp_diff.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_diff.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (key_resp_diff.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['1', '2', '3', '4', '5', '6', '7']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_diff.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      key_resp_diff.rt = key_resp_diff.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of DifficultyComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function DifficultyRoutineEnd() {
  //------Ending Routine 'Difficulty'-------
  for (const thisComponent of DifficultyComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (key_resp_diff.keys === undefined || key_resp_diff.keys.length === 0) {    // No response was made
      key_resp_diff.keys = undefined;
  }
  
  psychoJS.experiment.addData('key_resp_diff.keys', key_resp_diff.keys);
  if (typeof key_resp_diff.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_diff.rt', key_resp_diff.rt);
      routineTimer.reset();
      }
  
  // the Routine "Difficulty" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var StrategyComponents;
function StrategyRoutineBegin() {
  //------Prepare to start Routine 'Strategy'-------
  t = 0;
  StrategyClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  
  // keep track of which components have finished
  StrategyComponents = [];
  StrategyComponents.push(text_other);
  StrategyComponents.push(text);
  
  for (const thisComponent of StrategyComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function StrategyRoutineEachFrame() {
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

  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of StrategyComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function StrategyRoutineEnd() {
  //------Ending Routine 'Strategy'-------
  for (const thisComponent of StrategyComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // the Routine "Strategy" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var EndComponents;
function EndRoutineBegin() {
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
}


function EndRoutineEachFrame() {
  //------Loop for each frame of Routine 'End'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = EndClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *thank_you* updates
  if (t >= 0.0 && thank_you.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    thank_you.tStart = t;  // (not accounting for frame time here)
    thank_you.frameNStart = frameN;  // exact frame index
    thank_you.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (thank_you.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    thank_you.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of EndComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEnd() {
  //------Ending Routine 'End'-------
  for (const thisComponent of EndComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message, isCompleted});

  return Scheduler.Event.QUIT;
}

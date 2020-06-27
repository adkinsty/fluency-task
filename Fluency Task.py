#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.1.2),
    on Sat Jun 20 13:07:59 2020
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

import psychopy
psychopy.useVersion('2020.1')


from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.1.2'
expName = 'Word Fluency Task'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/canfenerci/Dropbox/IMMEM/Summer 2020/Fluency Task PAVLOVIA/Fluency Task.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[2560, 1440], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Instructions"
InstructionsClock = core.Clock()
instructions = visual.ImageStim(
    win=win,
    name='instructions', units='pix', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(1280,720),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
spacebar0 = keyboard.Keyboard()

# Initialize components for Routine "Trial"
TrialClock = core.Clock()
fixation = visual.TextStim(win=win, name='fixation',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
timer = visual.TextStim(win=win, name='timer',
    text='default text',
    font='Arial',
    pos=(-0.7, 0.4), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
instruct_text = visual.TextStim(win=win, name='instruct_text',
    text='Type as many items as possible that belong to the following category. Press "ENTER" after each item you type. ',
    font='Arial',
    pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
letter_text = visual.TextStim(win=win, name='letter_text',
    text='default text',
    font='Arial',
    pos=(0, 0.28), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
screen_text = visual.TextStim(win=win, name='screen_text',
    text=None,
    font='Arial',
    pos=(0, 0.2), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
list_text1 = visual.TextStim(win=win, name='list_text1',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
list_text2 = visual.TextStim(win=win, name='list_text2',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
list_text3 = visual.TextStim(win=win, name='list_text3',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
list_text4 = visual.TextStim(win=win, name='list_text4',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
list_text5 = visual.TextStim(win=win, name='list_text5',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
import string
import psychopy.event
import psychopy.core
allLetters = list(string.ascii_lowercase) #makes a list of alphabet characters

# Initialize components for Routine "Difficulty"
DifficultyClock = core.Clock()
fixation_1 = visual.TextStim(win=win, name='fixation_1',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
difficulty_question = visual.TextStim(win=win, name='difficulty_question',
    text='How difficult was it to think of items for this category? ',
    font='Arial',
    pos=(0, 0.2), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
options = visual.TextStim(win=win, name='options',
    text='1       2       3       4       5       6       7',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
anchor_1 = visual.TextStim(win=win, name='anchor_1',
    text='Not difficult at all',
    font='Arial',
    pos=(-0.4, -0.20), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
anchor_2 = visual.TextStim(win=win, name='anchor_2',
    text='Very Difficult\n',
    font='Arial',
    pos=(0.4, -0.20), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
key_resp_diff = keyboard.Keyboard()

# Initialize components for Routine "Strategy"
StrategyClock = core.Clock()
text_other = visual.TextStim(win=win, name='text_other',
    text='How did you go about thinking of items for this category? Type in one or two sentences and then press ENTER.',
    font='Arial',
    pos=(0, 0.25), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
text = visual.TextStim(win=win, name='text',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=1, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "End"
EndClock = core.Clock()
thank_you = visual.TextStim(win=win, name='thank_you',
    text='This is the end of the experiment.\nThank you for your time.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# set up handler to look after randomisation of conditions etc
instructions_loop = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('instructions.xlsx'),
    seed=None, name='instructions_loop')
thisExp.addLoop(instructions_loop)  # add the loop to the experiment
thisInstructions_loop = instructions_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisInstructions_loop.rgb)
if thisInstructions_loop != None:
    for paramName in thisInstructions_loop:
        exec('{} = thisInstructions_loop[paramName]'.format(paramName))

for thisInstructions_loop in instructions_loop:
    currentLoop = instructions_loop
    # abbreviate parameter names if possible (e.g. rgb = thisInstructions_loop.rgb)
    if thisInstructions_loop != None:
        for paramName in thisInstructions_loop:
            exec('{} = thisInstructions_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Instructions"-------
    continueRoutine = True
    # update component parameters for each repeat
    instructions.setImage(INS)
    spacebar0.keys = []
    spacebar0.rt = []
    _spacebar0_allKeys = []
    # keep track of which components have finished
    InstructionsComponents = [instructions, spacebar0]
    for thisComponent in InstructionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    InstructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Instructions"-------
    while continueRoutine:
        # get current time
        t = InstructionsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=InstructionsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instructions* updates
        if instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instructions.frameNStart = frameN  # exact frame index
            instructions.tStart = t  # local t and not account for scr refresh
            instructions.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructions, 'tStartRefresh')  # time at next scr refresh
            instructions.setAutoDraw(True)
        
        # *spacebar0* updates
        waitOnFlip = False
        if spacebar0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            spacebar0.frameNStart = frameN  # exact frame index
            spacebar0.tStart = t  # local t and not account for scr refresh
            spacebar0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(spacebar0, 'tStartRefresh')  # time at next scr refresh
            spacebar0.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(spacebar0.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(spacebar0.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if spacebar0.status == STARTED and not waitOnFlip:
            theseKeys = spacebar0.getKeys(keyList=['space', 'g'], waitRelease=False)
            _spacebar0_allKeys.extend(theseKeys)
            if len(_spacebar0_allKeys):
                spacebar0.keys = _spacebar0_allKeys[-1].name  # just the last key pressed
                spacebar0.rt = _spacebar0_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in InstructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Instructions"-------
    for thisComponent in InstructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    instructions_loop.addData('instructions.started', instructions.tStartRefresh)
    instructions_loop.addData('instructions.stopped', instructions.tStopRefresh)
    # the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 1 repeats of 'instructions_loop'


# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditions.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Trial"-------
    continueRoutine = True
    routineTimer.add(11.000000)
    # update component parameters for each repeat
    letter_text.setText(Category)
    # make sure no previous keypresses are used in the word
    event.clearEvents()
    #reset the routine Trial's clock
    TrialClock.reset() 
    # create empty strings for each of our word lists
    textFill = ''
    list_text1.setText('')
    list_text1.pos = [-.6, .15]
    
    list_text2.setText('')
    list_text2.pos = [-.3, .15]
    
    list_text3.setText('')
    list_text3.pos = [0, .15]
    
    list_text4.setText('')
    list_text4.pos = [.3, .15]
    
    list_text5.setText('')
    list_text5.pos = [.6, .15]
    
    textController = [list_text1, list_text2, list_text3, list_text4, list_text5]
    textIndex = 0
    entryCount = 0
    
    words_rt = []
    
    letter_text.bold = True
    
    # keep track of which components have finished
    TrialComponents = [fixation, timer, instruct_text, letter_text, screen_text, list_text1, list_text2, list_text3, list_text4, list_text5]
    for thisComponent in TrialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    TrialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Trial"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = TrialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=TrialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation* updates
        if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation.frameNStart = frameN  # exact frame index
            fixation.tStart = t  # local t and not account for scr refresh
            fixation.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
            fixation.setAutoDraw(True)
        if fixation.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                fixation.tStop = t  # not accounting for scr refresh
                fixation.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation, 'tStopRefresh')  # time at next scr refresh
                fixation.setAutoDraw(False)
        
        # *timer* updates
        if timer.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            timer.frameNStart = frameN  # exact frame index
            timer.tStart = t  # local t and not account for scr refresh
            timer.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(timer, 'tStartRefresh')  # time at next scr refresh
            timer.setAutoDraw(True)
        if timer.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > timer.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                timer.tStop = t  # not accounting for scr refresh
                timer.frameNStop = frameN  # exact frame index
                win.timeOnFlip(timer, 'tStopRefresh')  # time at next scr refresh
                timer.setAutoDraw(False)
        if timer.status == STARTED:  # only update if drawing
            timer.setText(str(round(routineTimer.getTime())) , log=False)
        
        # *instruct_text* updates
        if instruct_text.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            instruct_text.frameNStart = frameN  # exact frame index
            instruct_text.tStart = t  # local t and not account for scr refresh
            instruct_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruct_text, 'tStartRefresh')  # time at next scr refresh
            instruct_text.setAutoDraw(True)
        if instruct_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > instruct_text.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                instruct_text.tStop = t  # not accounting for scr refresh
                instruct_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(instruct_text, 'tStopRefresh')  # time at next scr refresh
                instruct_text.setAutoDraw(False)
        
        # *letter_text* updates
        if letter_text.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            letter_text.frameNStart = frameN  # exact frame index
            letter_text.tStart = t  # local t and not account for scr refresh
            letter_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(letter_text, 'tStartRefresh')  # time at next scr refresh
            letter_text.setAutoDraw(True)
        if letter_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > letter_text.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                letter_text.tStop = t  # not accounting for scr refresh
                letter_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(letter_text, 'tStopRefresh')  # time at next scr refresh
                letter_text.setAutoDraw(False)
        
        # *screen_text* updates
        if screen_text.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            screen_text.frameNStart = frameN  # exact frame index
            screen_text.tStart = t  # local t and not account for scr refresh
            screen_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(screen_text, 'tStartRefresh')  # time at next scr refresh
            screen_text.setAutoDraw(True)
        if screen_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > screen_text.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                screen_text.tStop = t  # not accounting for scr refresh
                screen_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(screen_text, 'tStopRefresh')  # time at next scr refresh
                screen_text.setAutoDraw(False)
        
        # *list_text1* updates
        if list_text1.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            list_text1.frameNStart = frameN  # exact frame index
            list_text1.tStart = t  # local t and not account for scr refresh
            list_text1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(list_text1, 'tStartRefresh')  # time at next scr refresh
            list_text1.setAutoDraw(True)
        if list_text1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > list_text1.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                list_text1.tStop = t  # not accounting for scr refresh
                list_text1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(list_text1, 'tStopRefresh')  # time at next scr refresh
                list_text1.setAutoDraw(False)
        
        # *list_text2* updates
        if list_text2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            list_text2.frameNStart = frameN  # exact frame index
            list_text2.tStart = t  # local t and not account for scr refresh
            list_text2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(list_text2, 'tStartRefresh')  # time at next scr refresh
            list_text2.setAutoDraw(True)
        if list_text2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > list_text2.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                list_text2.tStop = t  # not accounting for scr refresh
                list_text2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(list_text2, 'tStopRefresh')  # time at next scr refresh
                list_text2.setAutoDraw(False)
        
        # *list_text3* updates
        if list_text3.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            list_text3.frameNStart = frameN  # exact frame index
            list_text3.tStart = t  # local t and not account for scr refresh
            list_text3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(list_text3, 'tStartRefresh')  # time at next scr refresh
            list_text3.setAutoDraw(True)
        if list_text3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > list_text3.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                list_text3.tStop = t  # not accounting for scr refresh
                list_text3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(list_text3, 'tStopRefresh')  # time at next scr refresh
                list_text3.setAutoDraw(False)
        
        # *list_text4* updates
        if list_text4.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            list_text4.frameNStart = frameN  # exact frame index
            list_text4.tStart = t  # local t and not account for scr refresh
            list_text4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(list_text4, 'tStartRefresh')  # time at next scr refresh
            list_text4.setAutoDraw(True)
        if list_text4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > list_text4.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                list_text4.tStop = t  # not accounting for scr refresh
                list_text4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(list_text4, 'tStopRefresh')  # time at next scr refresh
                list_text4.setAutoDraw(False)
        
        # *list_text5* updates
        if list_text5.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            list_text5.frameNStart = frameN  # exact frame index
            list_text5.tStart = t  # local t and not account for scr refresh
            list_text5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(list_text5, 'tStartRefresh')  # time at next scr refresh
            list_text5.setAutoDraw(True)
        if list_text5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > list_text5.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                list_text5.tStop = t  # not accounting for scr refresh
                list_text5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(list_text5, 'tStopRefresh')  # time at next scr refresh
                list_text5.setAutoDraw(False)
        keys = event.getKeys()
        t = TrialClock.getTime()
        if 'escape' in keys:
            core.quit()  # So you can quit
        else:
            if keys:
                if keys[0] == 'space':
                    textFill += ' '  # Adds a space instead of 'space'
                elif keys[0] == 'right':
                    continueRoutine = False
                elif keys[0] == 'backspace':
                    textFill = textFill[:-1]  # Deletes
                elif keys[0] in allLetters:
                    textFill+=keys[0]  # Adds character to text if in alphabet.
                screen_text.setText(textFill)  # Set new text on screen
                
                if keys[0] == 'return':
                    # Set text input
                    column = textController[textIndex]
                    column_text = column.text + '\n' + screen_text.text
                    textFill = ''
                    screen_text.setText(textFill)
                    column.setPos([column.pos[0], column.pos[1] - (.0284)])
                    entryCount += 1
                    if entryCount >= 10:
                        entryCount = 0
                        textIndex += 1
                        if textIndex >= len(textController):
                            routineTimer.reset()
                            continueRoutine = False
                    words_rt.append(t)
                    column.setText(column_text)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in TrialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Trial"-------
    for thisComponent in TrialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('fixation.started', fixation.tStartRefresh)
    trials.addData('fixation.stopped', fixation.tStopRefresh)
    trials.addData('timer.started', timer.tStartRefresh)
    trials.addData('timer.stopped', timer.tStopRefresh)
    trials.addData('instruct_text.started', instruct_text.tStartRefresh)
    trials.addData('instruct_text.stopped', instruct_text.tStopRefresh)
    trials.addData('letter_text.started', letter_text.tStartRefresh)
    trials.addData('letter_text.stopped', letter_text.tStopRefresh)
    trials.addData('screen_text.started', screen_text.tStartRefresh)
    trials.addData('screen_text.stopped', screen_text.tStopRefresh)
    trials.addData('list_text1.started', list_text1.tStartRefresh)
    trials.addData('list_text1.stopped', list_text1.tStopRefresh)
    trials.addData('list_text2.started', list_text2.tStartRefresh)
    trials.addData('list_text2.stopped', list_text2.tStopRefresh)
    trials.addData('list_text3.started', list_text3.tStartRefresh)
    trials.addData('list_text3.stopped', list_text3.tStopRefresh)
    trials.addData('list_text4.started', list_text4.tStartRefresh)
    trials.addData('list_text4.stopped', list_text4.tStopRefresh)
    trials.addData('list_text5.started', list_text5.tStartRefresh)
    trials.addData('list_text5.stopped', list_text5.tStopRefresh)
    word_strings = [list_text1, list_text2, list_text3, list_text4, list_text5]
    all_words = []
    for this_word_string in word_strings:
        all_words.extend(this_word_string.text.strip().split('\n'))
        
    num= 1
    for words in all_words:
        thisExp.addData("word" + str(num), words)
        num= num + 1
    
    i=1
    for time in enumerate(words_rt):
        thisExp.addData('rt_' + str(i), time)
        i = i + 1
    
    routineTimer.reset()
    
    
    # ------Prepare to start Routine "Difficulty"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_diff.keys = []
    key_resp_diff.rt = []
    _key_resp_diff_allKeys = []
    # keep track of which components have finished
    DifficultyComponents = [fixation_1, difficulty_question, options, anchor_1, anchor_2, key_resp_diff]
    for thisComponent in DifficultyComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    DifficultyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Difficulty"-------
    while continueRoutine:
        # get current time
        t = DifficultyClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=DifficultyClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_1* updates
        if fixation_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_1.frameNStart = frameN  # exact frame index
            fixation_1.tStart = t  # local t and not account for scr refresh
            fixation_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_1, 'tStartRefresh')  # time at next scr refresh
            fixation_1.setAutoDraw(True)
        if fixation_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_1.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                fixation_1.tStop = t  # not accounting for scr refresh
                fixation_1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_1, 'tStopRefresh')  # time at next scr refresh
                fixation_1.setAutoDraw(False)
        
        # *difficulty_question* updates
        if difficulty_question.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            difficulty_question.frameNStart = frameN  # exact frame index
            difficulty_question.tStart = t  # local t and not account for scr refresh
            difficulty_question.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(difficulty_question, 'tStartRefresh')  # time at next scr refresh
            difficulty_question.setAutoDraw(True)
        
        # *options* updates
        if options.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            options.frameNStart = frameN  # exact frame index
            options.tStart = t  # local t and not account for scr refresh
            options.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(options, 'tStartRefresh')  # time at next scr refresh
            options.setAutoDraw(True)
        
        # *anchor_1* updates
        if anchor_1.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            anchor_1.frameNStart = frameN  # exact frame index
            anchor_1.tStart = t  # local t and not account for scr refresh
            anchor_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(anchor_1, 'tStartRefresh')  # time at next scr refresh
            anchor_1.setAutoDraw(True)
        
        # *anchor_2* updates
        if anchor_2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            anchor_2.frameNStart = frameN  # exact frame index
            anchor_2.tStart = t  # local t and not account for scr refresh
            anchor_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(anchor_2, 'tStartRefresh')  # time at next scr refresh
            anchor_2.setAutoDraw(True)
        
        # *key_resp_diff* updates
        waitOnFlip = False
        if key_resp_diff.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            key_resp_diff.frameNStart = frameN  # exact frame index
            key_resp_diff.tStart = t  # local t and not account for scr refresh
            key_resp_diff.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_diff, 'tStartRefresh')  # time at next scr refresh
            key_resp_diff.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_diff.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_diff.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_diff.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_diff.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7'], waitRelease=False)
            _key_resp_diff_allKeys.extend(theseKeys)
            if len(_key_resp_diff_allKeys):
                key_resp_diff.keys = _key_resp_diff_allKeys[-1].name  # just the last key pressed
                key_resp_diff.rt = _key_resp_diff_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in DifficultyComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Difficulty"-------
    for thisComponent in DifficultyComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('fixation_1.started', fixation_1.tStartRefresh)
    trials.addData('fixation_1.stopped', fixation_1.tStopRefresh)
    trials.addData('difficulty_question.started', difficulty_question.tStartRefresh)
    trials.addData('difficulty_question.stopped', difficulty_question.tStopRefresh)
    trials.addData('options.started', options.tStartRefresh)
    trials.addData('options.stopped', options.tStopRefresh)
    trials.addData('anchor_1.started', anchor_1.tStartRefresh)
    trials.addData('anchor_1.stopped', anchor_1.tStopRefresh)
    trials.addData('anchor_2.started', anchor_2.tStartRefresh)
    trials.addData('anchor_2.stopped', anchor_2.tStopRefresh)
    # check responses
    if key_resp_diff.keys in ['', [], None]:  # No response was made
        key_resp_diff.keys = None
    trials.addData('key_resp_diff.keys',key_resp_diff.keys)
    if key_resp_diff.keys != None:  # we had a response
        trials.addData('key_resp_diff.rt', key_resp_diff.rt)
    trials.addData('key_resp_diff.started', key_resp_diff.tStartRefresh)
    trials.addData('key_resp_diff.stopped', key_resp_diff.tStopRefresh)
    # the Routine "Difficulty" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "Strategy"-------
    continueRoutine = True
    # update component parameters for each repeat
    
    allLetters = list(string.ascii_lowercase) #makes a list of alphabet characters
    event.clearEvents()
    modify = False
    text.text = ''
    
    
    # keep track of which components have finished
    StrategyComponents = [text_other, text]
    for thisComponent in StrategyComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    StrategyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Strategy"-------
    while continueRoutine:
        # get current time
        t = StrategyClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=StrategyClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_other* updates
        if text_other.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            text_other.frameNStart = frameN  # exact frame index
            text_other.tStart = t  # local t and not account for scr refresh
            text_other.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_other, 'tStartRefresh')  # time at next scr refresh
            text_other.setAutoDraw(True)
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        keys = event.getKeys()
        if len(keys):
            if 'space' in keys:
                text.text = text.text + ' '
            elif 'backspace' in keys:
                text.text = text.text[:-1]
            elif 'comma' in keys:
                text.text =  text.text + ','
            elif 'period' in keys:
                text.text = text.text + '.'
            elif 'lshift' in keys or 'rshift' in keys:
                modify = True
            elif 'return' in keys:
                continueRoutine = False
            elif 'escape' in keys:
                core.quit()  # So you can quit
            else:
                if modify:
                    text.text = text.text + keys[0].upper()
                    modify = False
                else:
                    text.text = text.text + keys[0]
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in StrategyComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Strategy"-------
    for thisComponent in StrategyComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('text_other.started', text_other.tStartRefresh)
    trials.addData('text_other.stopped', text_other.tStopRefresh)
    trials.addData('text.started', text.tStartRefresh)
    trials.addData('text.stopped', text.tStopRefresh)
    thisExp.addData("Strategy_resp", text.text)
    # the Routine "Strategy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# ------Prepare to start Routine "End"-------
continueRoutine = True
routineTimer.add(3.000000)
# update component parameters for each repeat
# keep track of which components have finished
EndComponents = [thank_you]
for thisComponent in EndComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
EndClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "End"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = EndClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=EndClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *thank_you* updates
    if thank_you.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thank_you.frameNStart = frameN  # exact frame index
        thank_you.tStart = t  # local t and not account for scr refresh
        thank_you.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thank_you, 'tStartRefresh')  # time at next scr refresh
        thank_you.setAutoDraw(True)
    if thank_you.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > thank_you.tStartRefresh + 3-frameTolerance:
            # keep track of stop time/frame for later
            thank_you.tStop = t  # not accounting for scr refresh
            thank_you.frameNStop = frameN  # exact frame index
            win.timeOnFlip(thank_you, 'tStopRefresh')  # time at next scr refresh
            thank_you.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "End"-------
for thisComponent in EndComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('thank_you.started', thank_you.tStartRefresh)
thisExp.addData('thank_you.stopped', thank_you.tStopRefresh)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()

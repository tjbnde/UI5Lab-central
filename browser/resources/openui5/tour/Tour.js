sap.ui.define(["sap/m/ResponsivePopover","sap/ui/core/Control"],function(t,e){"use strict";const s=e.extend("openui5.tour.Tour",{metadata:{library:"openui5.tour",properties:{},defaultAggregation:"steps",aggregations:{steps:{type:"openui5.tour.TourStep",multiple:true,singularName:"step"}},events:{started:{parameters:{}},completed:{parameters:{}},nextStep:{parameters:{}},previousStep:{parameters:{}}}}});s.prototype.init=function(){this._currentStepIndex=0};s.prototype.start=function(){this._setFirstStep();this._setLastStep();this._setCurrentStepIndex(0);this._goToStep(this._getCurrentStepIndex());this.fireStarted()};s.prototype.complete=function(){this.getSteps()[this._getCurrentStepIndex()].close();this._setCurrentStepIndex(0);this.fireCompleted()};s.prototype.nextStep=function(){const t=this._getCurrentStepIndex()+1;this._goToStep(t);this.fireNextStep()};s.prototype.previousStep=function(){const t=this._getCurrentStepIndex()-1;this._goToStep(t);this.firePreviousStep()};s.prototype._getCurrentStepIndex=function(){return this._currentStepIndex};s.prototype._setCurrentStepIndex=function(t){this._currentStepIndex=t};s.prototype._isValidStepIndex=function(t){if(!this.getSteps()[t]){throw new Error("Tour does not contain step index #"+t)}return true};s.prototype._goToStep=function(t){if(this._isValidStepIndex(t)){this.getSteps()[this._getCurrentStepIndex()].close();this._setCurrentStepIndex(t);this.getSteps()[t].open()}};s.prototype._setFirstStep=function(){const t=0;if(this._isValidStepIndex(t)){this.getSteps()[t].setIsFirstStep(true)}};s.prototype._setLastStep=function(){const t=this.getSteps().length-1;if(this._isValidStepIndex(t)){this.getSteps()[t].setIsLastStep(true)}};return s});
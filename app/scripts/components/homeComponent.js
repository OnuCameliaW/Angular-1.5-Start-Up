'use strict';

angular.module('angAppApp')
	.component('first', {
		template: '<p>Hello, {{ $ctrl.user }} ! Componenta dragu</p>',
  		controller: function() {
    		this.user = 'Cami';
  		}
	});
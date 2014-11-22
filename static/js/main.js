var RegionBuilder = function(){
	//constructor function for


	this.layerAmount = 4;
	this.subRegions = 19;
	this.regions = 7;

	this.types = window.REGION_TYPES;

	this.buildRegion = function(){
		var primaryTerrain = this.chooseRandomRegion();
		for( x = 0; x < this.layerAmount)

		//pick random place to start 0-18;
	}

	//use levels and posisitons in levels to save the data for it

	this.chooseRandomRegion = function(){

		var roll = this.roll2D6s(),
			region = this.types[Math.floor(Math.random()*this.types.length)];
		if ( roll < 10 && roll > 4 ){
			region = this.types[0];
		} else if ( roll === 4 || roll === 10 ){
			region = this.types[2];
		} else if ( roll === 3 || roll === 11 ){
			region = this.types[1];
		}
		return region;

	};

	this.roll2D6s = function(){
		return this.rollD6() + this.rollD6();
	};

	this.rollD6 = function(){
		return Math.floor(Math.random() * 6)+1;
	};

	this.rollD12 = function(){
		return Math.floor(Math.random() * 12)+1;
	};

}

//there are 7 regional hexes
//each regional hex has 19 sub hexes
//each individual sub hex has a primary terrain type ( 7 of them )
//each x should be able to tell you what the adjacents neihbors are

//each regional hex will have a primary terrian, 6 secondary 3 tertairy, one wild

$(function(){

	var regionBuilder = new RegionBuilder();

	$('#buildRegion').on('click', function(){
		console.log( regionBuilder.buildRegion() );
	});
});
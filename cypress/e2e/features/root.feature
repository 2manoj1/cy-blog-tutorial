Feature: root page should visible
	Scenario: root page should visible
		When I visit site
		Then I should see a root page with title 'Welcome to Next.js!'

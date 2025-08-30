#!/usr/bin/env node

/**
 * CSP Test Script
 * This script helps test Content Security Policy configuration
 */

const testCSPViolations = () => {
  console.log('🔒 Testing CSP Configuration...\n');

  // Test 1: eval() function
  try {
    eval('console.log("This should be blocked by CSP")');
    console.log('❌ eval() is allowed - CSP may not be working');
  } catch (error) {
    console.log('✅ eval() is blocked by CSP');
  }

  // Test 2: new Function()
  try {
    const fn = new Function('console.log("This should be blocked by CSP")');
    fn();
    console.log('❌ new Function() is allowed - CSP may not be working');
  } catch (error) {
    console.log('✅ new Function() is blocked by CSP');
  }

  // Test 3: setTimeout with string
  try {
    setTimeout('console.log("This should be blocked by CSP")', 100);
    console.log('❌ setTimeout with string is allowed - CSP may not be working');
  } catch (error) {
    console.log('✅ setTimeout with string is blocked by CSP');
  }

  // Test 4: setInterval with string
  try {
    setInterval('console.log("This should be blocked by CSP")', 1000);
    console.log('❌ setInterval with string is allowed - CSP may not be working');
  } catch (error) {
    console.log('✅ setInterval with string is blocked by CSP');
  }

  console.log('\n📋 CSP Test Summary:');
  console.log('- If you see ✅ marks, CSP is working correctly');
  console.log('- If you see ❌ marks, CSP may need adjustment');
  console.log('- Check browser console for additional CSP violations');
};

// Run tests if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testCSPViolations();
}

export { testCSPViolations };
